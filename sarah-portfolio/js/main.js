/* ============================================================
   Sarah Khairunnisa Adi Kusuma — Portfolio
   Vanilla JS: navigation, scroll spy, reveal, project modal
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Project data — sourced strictly from the CV.
     No external/public project URLs exist, so none are listed.
  ---------------------------------------------------------- */
  const PROJECTS = {
    finance: {
      category: 'Academic Project',
      title: 'Financial Behavior & Investment Decision',
      context: 'Undergraduate Final Project · Universitas Telkom',
      description:
        'Final project for the Bachelor of Management programme, titled “Pengaruh Perilaku Keuangan dan Sikap Keuangan ' +
        'Terhadap Keputusan Investasi dengan Literasi Keuangan sebagai Variabel Moderasi” — a study of how financial ' +
        'behavior and financial attitude influence investment decisions, with financial literacy tested as a moderating variable.',
      contribution: [
        'Formulated the research problem and framework around financial behavior, financial attitude, and investment decisions.',
        'Positioned financial literacy as a moderating variable within the research model.',
        'Applied coursework in financial management, data management, and data analytics to the analysis.',
        'Compiled and presented the study as the final requirement of the degree programme.'
      ],
      skills: ['Manajemen Keuangan', 'Manajemen Data', 'Big Data dan Data Analitik', 'Data Analytics', 'Attention to Detail', 'Problem Solving']
    },

    cef: {
      category: 'Event / Marketing Project',
      title: 'Creative Entrepreneurship Festival',
      context: 'Production, Media & Marketing · Universitas Telkom · Mar 2023 – May 2023',
      description:
        'A programme designed to give students direct experience in developing innovative business ideas — from planning ' +
        'and production through to marketing. Participants learned to identify market opportunities, understand operational ' +
        'challenges, and sharpen their ability to create products with real market value.',
      contribution: [
        'Designed the digital marketing strategy and managed creative social media content to increase brand awareness.',
        'Planned production requirements and selected quality raw materials.',
        'Processed products in line with strict hygiene standards.',
        'Ran periodic quality control on production output to ensure quantity matched demand targets.'
      ],
      skills: ['Digital Marketing', 'Social Media Content', 'Brand Awareness', 'Quality Control', 'Project Management', 'Teamwork', 'Canva']
    },

    celoe: {
      category: 'Professional Experience',
      title: 'Digital Learning Content Management',
      context: 'CeLOE Telkom University · Jul 2023 – Sep 2023',
      description:
        'Role as Staff Pengelolaan dan Pemanfaatan Content Digital at the Center of eLearning and Open Education (CeLOE), ' +
        'which provides an integrated blended-learning ecosystem based on technology, science, and art.',
      contribution: [
        'Content Production — produced and curated visual learning materials (PowerPoint slides and instructional videos) meeting company quality standards on a daily basis.',
        'Platform Management — managed and uploaded content on schedule to the e-learning platform to keep the user experience optimal.',
        'Event & Booth Management — took part in field coordination, staffed the booth, and built persuasive communication with visitors and partners.'
      ],
      skills: ['Microsoft PowerPoint', 'Canva', 'Content Curation', 'Platform Management', 'Communication', 'Responsibility', 'Events']
    }
  };

  /* ==========================================================
     1. Sticky navbar — shadow on scroll
  ========================================================== */
  const navbar = document.getElementById('navbar');

  /* ==========================================================
     2. Mobile menu
  ========================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('iconMenu');
  const iconClose = document.getElementById('iconClose');

  function setMobileMenu(open) {
    mobileMenu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    iconMenu.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
  }

  menuToggle.addEventListener('click', function () {
    setMobileMenu(!mobileMenu.classList.contains('is-open'));
  });

  // close the mobile menu when the viewport grows to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) setMobileMenu(false);
  });

  /* ==========================================================
     3. Smooth scrolling for every in-page link
  ========================================================== */
  function scrollToTarget(hash) {
    const target = document.querySelector(hash);
    if (!target) return false;

    const navHeight = navbar ? navbar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: Math.max(top, 0), behavior: reduced ? 'auto' : 'smooth' });
    return true;
  }

  document.querySelectorAll('a[data-nav]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const hash = link.getAttribute('href');
      if (!hash || hash.charAt(0) !== '#') return;

      event.preventDefault();
      setMobileMenu(false);

      if (scrollToTarget(hash) && history.replaceState) {
        history.replaceState(null, '', hash);
      }
    });
  });

  /* ==========================================================
     4. Active navigation state while scrolling
  ========================================================== */
  const navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link, .mobile-link'));
  const trackedIds = navLinks.map(function (link) { return link.getAttribute('href'); });

  // only track sections that actually have a nav entry, so scrolling past
  // Education keeps "Experience" highlighted instead of clearing the state
  const sections = Array.prototype.slice
    .call(document.querySelectorAll('section[id]'))
    .filter(function (section) { return trackedIds.indexOf('#' + section.id) !== -1; });

  function syncActiveLink() {
    const offset = (navbar ? navbar.offsetHeight : 0) + 90;
    const scrollY = window.pageYOffset;
    let currentId = sections.length ? sections[0].id : '';

    sections.forEach(function (section) {
      if (scrollY + offset >= section.offsetTop) currentId = section.id;
    });

    // near the bottom of the page, highlight the last section
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 4 && sections.length) {
      currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + currentId);
    });
  }

  /* ==========================================================
     5. Scroll progress bar + back-to-top + navbar shadow
  ========================================================== */
  const progressBar = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (progressBar) {
      progressBar.style.width = (docHeight > 0 ? (scrollY / docHeight) * 100 : 0) + '%';
    }
    if (navbar) navbar.classList.toggle('is-scrolled', scrollY > 8);
    if (backToTop) backToTop.classList.toggle('is-visible', scrollY > 600);

    syncActiveLink();
  }

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });

  /* ==========================================================
     6. Scroll reveal
  ========================================================== */
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ==========================================================
     7. Project modal
  ========================================================== */
  const modal = document.getElementById('projectModal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalContext = document.getElementById('modalContext');
  const modalDescription = document.getElementById('modalDescription');
  const modalContribution = document.getElementById('modalContribution');
  const modalSkills = document.getElementById('modalSkills');
  const modalClose = document.getElementById('modalClose');

  let lastFocused = null;

  function openModal(key) {
    const data = PROJECTS[key];
    if (!data) return;

    lastFocused = document.activeElement;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalContext.textContent = data.context;
    modalDescription.textContent = data.description;

    modalContribution.innerHTML = '';
    data.contribution.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      modalContribution.appendChild(li);
    });

    modalSkills.innerHTML = '';
    data.skills.forEach(function (skill) {
      const span = document.createElement('span');
      span.className = 'pill';
      span.textContent = skill;
      modalSkills.appendChild(span);
    });

    modal.hidden = false;
    document.body.classList.add('modal-open');
    // let the browser paint the hidden state before transitioning in
    window.requestAnimationFrame(function () {
      modal.classList.add('is-open');
    });
    modalClose.focus();
  }

  function closeModal() {
    if (modal.hidden) return;

    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');

    window.setTimeout(function () {
      modal.hidden = true;
      modal.querySelector('.modal-panel').scrollTop = 0;
    }, 220);

    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  document.querySelectorAll('[data-project]').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.getAttribute('data-project'));
    });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        openModal(card.getAttribute('data-project'));
      }
    });
  });

  // close: X button and overlay click
  modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  // close: Escape + keep focus inside the dialog
  document.addEventListener('keydown', function (event) {
    if (modal.hidden) return;

    if (event.key === 'Escape' || event.key === 'Esc') {
      closeModal();
      return;
    }

    if (event.key === 'Tab') {
      const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* ==========================================================
     8. Footer year + first paint
  ========================================================== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  onScroll();
})();
