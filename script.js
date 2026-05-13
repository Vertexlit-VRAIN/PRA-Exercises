(function () {
  'use strict';

  var tabs    = document.querySelectorAll('.nav-tab');
  var panels  = document.querySelectorAll('.tab-panel');
  var main    = document.querySelector('.main-content');
  var burger  = document.querySelector('.hamburger');
  var nav     = document.querySelector('.main-nav');

  function activateTab(targetId) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute('aria-controls') === targetId;
      tab.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach(function (panel) {
      if (panel.id === targetId) {
        panel.hidden = false;
        panel.classList.add('is-entering');
        panel.offsetHeight; // force reflow so opacity:0 is painted before transition
        panel.classList.remove('is-entering');
      } else {
        panel.hidden = true;
      }
    });

    main.setAttribute('data-active-theme', targetId);

    if (nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      var targetId = tab.getAttribute('aria-controls');
      activateTab(targetId);
      history.replaceState(null, '', '#' + targetId);
    });

    tab.addEventListener('keydown', function (e) {
      var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var next = (index + dir + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  });

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Resolve URL hash: may be a main-tab id or a sub-panel id (e.g. #arboles from back-links)
  var hash     = window.location.hash.replace('#', '');
  var validIds = Array.prototype.map.call(panels, function (p) { return p.id; });

  var targetMainId = null;
  var targetSubId  = null;

  if (validIds.indexOf(hash) !== -1) {
    targetMainId = hash;
  } else if (hash) {
    var hashEl = document.getElementById(hash);
    if (hashEl && hashEl.classList.contains('sub-panel')) {
      var parentTabEl = hashEl.closest('.tab-panel');
      if (parentTabEl) { targetMainId = parentTabEl.id; targetSubId = hash; }
    }
  }

  activateTab(targetMainId || validIds[0]);

  // ─── Sub-tabs (one independent group per .sub-nav) ───────────────────────────
  document.querySelectorAll('.sub-nav').forEach(function (subNav) {
    var subTabs   = Array.prototype.slice.call(subNav.querySelectorAll('.sub-tab'));
    var panel     = subNav.closest('.tab-panel');
    var subPanels = panel ? Array.prototype.slice.call(panel.querySelectorAll('.sub-panel')) : [];

    function activateSubTab(targetId) {
      subTabs.forEach(function (tab) {
        tab.setAttribute('aria-selected', String(tab.getAttribute('aria-controls') === targetId));
      });
      subPanels.forEach(function (sp) {
        sp.hidden = sp.id !== targetId;
      });
    }

    subTabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        var targetId = tab.getAttribute('aria-controls');
        activateSubTab(targetId);
        history.replaceState(null, '', '#' + targetId);
      });

      tab.addEventListener('keydown', function (e) {
        var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        var next = (index + dir + subTabs.length) % subTabs.length;
        subTabs[next].focus();
        subTabs[next].click();
      });
    });

    // Use targetSubId if it belongs to this panel, otherwise activate the first sub-tab
    var inThisPanel = targetSubId &&
      subPanels.some(function (sp) { return sp.id === targetSubId; });
    if (subTabs.length) {
      activateSubTab(inThisPanel ? targetSubId : subTabs[0].getAttribute('aria-controls'));
    }
  });

  // ─── Card scroll-in animation ────────────────────────────────────────────────
  var STAGGER_MS       = 80;
  var TRANSITION_MS    = 450;

  var cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var card  = entry.target;
      var delay = parseInt(card.dataset.staggerDelay || '0', 10);
      card.classList.add('is-visible');
      cardObserver.unobserve(card);
      setTimeout(function () { card.style.transitionDelay = ''; }, delay + TRANSITION_MS);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.exercise-card').forEach(function (card) {
    var siblings = Array.prototype.slice.call(
      card.parentNode.querySelectorAll('.exercise-card')
    );
    var delay = siblings.indexOf(card) * STAGGER_MS;
    card.dataset.staggerDelay    = delay;
    card.style.transitionDelay   = delay + 'ms';
    cardObserver.observe(card);
  });

  // ─── Card completion (localStorage) ─────────────────────────────────────────
  document.querySelectorAll('.exercise-card').forEach(function (card) {
    var link = card.querySelector('a.card-link[href]');
    if (!link) return; // skip coming-soon cards

    var key  = 'pra-done:' + link.getAttribute('href');
    var btn  = document.createElement('button');
    btn.className = 'card-done-btn';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label',   'Marcar como completado');
    btn.innerHTML = '<span aria-hidden="true">✓</span>';
    card.appendChild(btn);

    if (localStorage.getItem(key) === '1') {
      card.classList.add('is-done');
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label',   'Desmarcar como completado');
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var done = card.classList.toggle('is-done');
      localStorage.setItem(key, done ? '1' : '0');
      btn.setAttribute('aria-pressed', String(done));
      btn.setAttribute('aria-label', done ? 'Desmarcar como completado' : 'Marcar como completado');
    });
  });

})();
