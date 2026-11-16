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
  // data-webhook set   → POST the enquiry as JSON; confirm only on a 2xx reply.
  // data-webhook empty → open the visitor's email app with the enquiry
  //                      pre-filled, and say plainly it has not been sent.
  const rfqForm = document.getElementById('rfq-form');
  if (rfqForm) {
    const SALES_EMAIL = 'sales@visceraenergy.com';
    const feedback    = document.getElementById('form-feedback');

    const showFeedback = (text, type) => {
      if (!feedback) return;
      feedback.textContent = text;
      feedback.className   = `form-feedback form-feedback--${type}`;
    };

    // "Label: value" lines in form order, using visible labels and option text.
    const enquiryLines = () =>
      [...rfqForm.elements]
        .filter(el => el.name && el.value.trim())
        .map(el => {
          const label = rfqForm.querySelector(`label[for="${el.id}"]`);
          const name  = label ? label.textContent.replace('*', '').trim() : el.name;
          const value = el.tagName === 'SELECT' ? el.selectedOptions[0].text : el.value.trim();
          return `${name}: ${value}`;
        });

    // Clear a field's error state as soon as it becomes valid.
    rfqForm.addEventListener('input', (e) => {
      if (e.target.hasAttribute('aria-invalid') && e.target.checkValidity()) {
        e.target.removeAttribute('aria-invalid');
      }
    });

    rfqForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // The form is novalidate, so required and email checks happen here.
      const invalid = [...rfqForm.elements].filter(el => el.willValidate && !el.validity.valid);
      if (invalid.length) {
        invalid.forEach(el => el.setAttribute('aria-invalid', 'true'));
        rfqForm.reportValidity();
        showFeedback('Please complete the highlighted fields.', 'error');
        return;
      }

      const webhookUrl = rfqForm.dataset.webhook || '';

      if (!webhookUrl) {
        // Kept synchronous so the mail app opens inside the submit click,
        // which some browsers require before handing off to another app.
        const service = rfqForm.elements.serviceType.selectedOptions[0].text;
        const subject = `RFQ from ${rfqForm.elements.company.value.trim()} — ${service}`;
        const body    = enquiryLines().join('\r\n');
        window.location.href =
          `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // The form is not reset, so nothing is lost if no mail app opens.
        showFeedback(
          'Your email app should now open with this enquiry ready to send — it has not been sent yet. ' +
          `If nothing opened, email ${SALES_EMAIL} directly.`,
          'info'
        );
        return;
      }

      const btn      = rfqForm.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;

      try {
        const res = await fetch(webhookUrl, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(Object.fromEntries(new FormData(rfqForm))),
        });
        if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

        rfqForm.reset();
        showFeedback(
          'Thank you — your enquiry has been received. We will respond within one business day.',
          'success'
        );
      } catch (err) {
        console.error('Form error:', err);
        showFeedback(`Something went wrong. Please email us directly at ${SALES_EMAIL}`, 'error');
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
