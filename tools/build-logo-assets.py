#!/usr/bin/env python3
"""
Generate every derived logo asset from one source file.

Input : assets/brand/viscera-logo.png   (the master lockup, white background OK)
Output: assets/brand/logo-lockup.png          trimmed, transparent  (light backgrounds)
        assets/brand/logo-lockup-reversed.png trimmed, transparent, navy ink -> white
        assets/brand/logo-mark.png            just the swirl, transparent
        assets/brand/favicon-32.png
        assets/brand/favicon-180.png          apple-touch-icon
        assets/brand/favicon.ico              16/32/48
        assets/brand/og-image.png             1200x630 social card on navy

Re-runnable: safe to execute any time the master logo changes.
"""
from PIL import Image
from pathlib import Path
import sys

BRAND   = Path(__file__).resolve().parent.parent / "assets" / "brand"
SRC     = BRAND / "viscera-logo.png"
NAVY    = (10, 22, 40)          # --navy  #0a1628
BG_HI   = 242                   # min-channel at or above this is background
BG_LO    = 202                  # at or below this is solid ink; between = feathered edge


def load_master():
    if not SRC.exists():
        sys.exit(f"Missing master logo: {SRC}\nSave the logo there, then re-run.")
    return Image.open(SRC).convert("RGBA")


def background_to_alpha(img):
    """Key the white background out globally, with a soft ramp so antialiased
    edges stay smooth.

    A corner flood-fill is the usual safe choice, but this artwork is solid
    navy+gold ink on white with no white ink anywhere - so a global key is
    correct AND necessary: it also clears the counters (the holes in O, R, A,
    e), which a flood-fill cannot reach. Leaving those filled puts white blobs
    inside every letter once the logo sits on the navy nav.
    """
    img = img.copy()
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            m = min(r, g, b)
            if m >= BG_HI:                      # background
                px[x, y] = (r, g, b, 0)
            elif m > BG_LO:                     # antialiased edge -> feather
                px[x, y] = (r, g, b, int(a * (BG_HI - m) / (BG_HI - BG_LO)))
    return img


def trim(img, pad_ratio=0.02):
    """Crop to the ink, then add a small even margin so the logo never
    touches its own edge when scaled into a nav bar."""
    box = img.getbbox()
    if not box:
        return img
    img = img.crop(box)
    pad = int(max(img.size) * pad_ratio)
    if pad:
        out = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
        out.paste(img, (pad, pad))
        img = out
    return img


def reverse_ink(img):
    """Dark navy ink -> white, for placing on the navy nav and footer.
    The gold is left untouched so the two-tone mark survives."""
    img = img.copy()
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            # navy-ish: dark overall, and blue leads red
            if r < 120 and g < 130 and b < 170 and b >= r:
                px[x, y] = (255, 255, 255, a)
    return img


def crop_mark(img):
    """Top portion of the lockup is the swirl; the wordmark sits underneath.
    Split on the widest empty horizontal gap in the lower half."""
    px = img.load()
    w, h = img.size
    rows = []
    for y in range(h):
        rows.append(any(px[x, y][3] > 12 for x in range(0, w, 2)))

    gaps, run = [], None
    for y, inked in enumerate(rows):
        if not inked and run is None:
            run = y
        elif inked and run is not None:
            gaps.append((run, y))
            run = None
    inner = [g for g in gaps if 0 < g[0] < h * 0.85]
    if not inner:
        return img
    split = max(inner, key=lambda g: g[1] - g[0])[0]
    return trim(img.crop((0, 0, w, split)))


def square(img, size, bg=(0, 0, 0, 0)):
    c = img.copy()
    c.thumbnail((size, size), Image.LANCZOS)
    out = Image.new("RGBA", (size, size), bg)
    out.paste(c, ((size - c.width) // 2, (size - c.height) // 2), c)
    return out


def main():
    master   = load_master()
    clear    = background_to_alpha(master)
    lockup   = trim(clear)
    reversed_ = reverse_ink(lockup)
    mark     = crop_mark(lockup)

    # Ship at 3x the largest on-page size (footer renders at 72px tall), not at
    # master resolution - this file loads on every page.
    def web(im, max_h, name):
        out = im.copy()
        if out.height > max_h:
            out = out.resize((round(out.width * max_h / out.height), max_h), Image.LANCZOS)
        out.save(BRAND / name, optimize=True)

    web(lockup,    216, "logo-lockup.png")
    web(reversed_, 216, "logo-lockup-reversed.png")
    web(mark,      216, "logo-mark.png")

    # Favicons come from the mark alone - the wordmark is unreadable at 32px.
    square(mark, 32).save(BRAND / "favicon-32.png")
    square(mark, 180, bg=(255, 255, 255, 255)).convert("RGB").save(BRAND / "favicon-180.png")
    square(mark, 48).save(
        BRAND / "favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    # Social card: reversed lockup centred on brand navy.
    og = Image.new("RGBA", (1200, 630), NAVY + (255,))
    card = reversed_.copy()
    card.thumbnail((820, 400), Image.LANCZOS)
    og.paste(card, ((1200 - card.width) // 2, (630 - card.height) // 2), card)
    og.convert("RGB").save(BRAND / "og-image.png", quality=92)

    print(f"master           {master.size[0]}x{master.size[1]}")
    for n in ("logo-lockup.png", "logo-lockup-reversed.png", "logo-mark.png",
              "favicon-32.png", "favicon-180.png", "favicon.ico", "og-image.png"):
        p = BRAND / n
        print(f"  {n:28} {Image.open(p).size[0]}x{Image.open(p).size[1]:<5} {p.stat().st_size/1024:6.1f} KB")


if __name__ == "__main__":
    main()
