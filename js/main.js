/* ============================================================
   VISCERA ENERGY — main.js
   Handles: nav scroll/mobile, reveal animations, form submit
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV: scroll state ──────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── NAV: mobile toggle ─────────────────────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));

      // Animate hamburger → X
      const spans = toggle.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      }
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ── NAV: active page highlight ─────────────────────────── */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      a.classList.add('active');
    }
  });

  /* ── REVEAL ANIMATIONS (Intersection Observer) ───────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── RFQ FORM SUBMISSION ────────────────────────────────── */
  const rfqForm = document.getElementById('rfq-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn      = rfqForm.querySelector('[type="submit"]');
      const feedback = document.getElementById('form-feedback');
      const origText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled    = true;

      const data = Object.fromEntries(new FormData(rfqForm));

      try {
        // Primary: n8n webhook (replace URL with your actual n8n webhook)
        const webhookUrl = rfqForm.dataset.webhook || '';

        if (webhookUrl) {
          const res = await fetch(webhookUrl, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(data),
          });

          if (!res.ok) throw new Error('Webhook error');
        } else {
          // Fallback: mailto
          const subject = encodeURIComponent(
            `RFQ from ${data.company || data.name} — ${data.service_type || 'General Enquiry'}`
          );
          const body = encodeURIComponent(
            Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n')
          );
          window.location.href = `mailto:sales@visceraenergy.com?subject=${subject}&body=${body}`;
        }

        // Success state
        rfqForm.reset();
        if (feedback) {
          feedback.textContent =
            'Thank you — your enquiry has been received. We will respond within one business day.';
          feedback.className = 'form-feedback form-feedback--success';
        }

      } catch (err) {
        console.error('Form error:', err);
        if (feedback) {
          feedback.textContent =
            'Something went wrong. Please email us directly at sales@visceraenergy.com';
          feedback.className = 'form-feedback form-feedback--error';
        }
      } finally {
        btn.textContent = origText;
        btn.disabled    = false;
      }
    });
  }

  /* ── OEM GRID: hover tooltip ────────────────────────────── */
  document.querySelectorAll('.oem-cell[data-info]').forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      cell.setAttribute('title', cell.dataset.info);
    });
  });

  /* ── SMOOTH ANCHOR SCROLL ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.getElementById('nav')?.offsetHeight || 72;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
