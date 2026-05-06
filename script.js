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
      panel.hidden = panel.id !== targetId;
    });

    main.setAttribute('data-active-theme', targetId);

    // close hamburger menu if open
    if (nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetId = tab.getAttribute('aria-controls');
      activateTab(targetId);
      history.replaceState(null, '', '#' + targetId);
    });
  });

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Activate tab from URL hash, falling back to first tab
  var hash = window.location.hash.replace('#', '');
  var validIds = Array.prototype.map.call(panels, function (p) { return p.id; });
  activateTab(validIds.indexOf(hash) !== -1 ? hash : validIds[0]);

})();
