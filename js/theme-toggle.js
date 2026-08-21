(function () {
  var $ = window.jQuery;
  if (!$) return;
  function setIcon(isDark) {
    var icon = document.querySelector('.js-dark-toggle i');
    if (!icon) return;
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
  }
  setIcon(document.body.classList.contains('dark'));
  $(document).on('click', '.js-dark-toggle', function (e) {
    e.preventDefault();
    var isDark = document.body.classList.contains('dark');
    document.body.classList.toggle('dark', !isDark);
    localStorage.setItem('wcTheme', isDark ? '0' : '1');
    var hl = document.querySelector('link[title="hl-light"]'), hd = document.querySelector('link[title="hl-dark"]');
    if (hl) hl.disabled = !isDark;
    if (hd) hd.disabled = isDark;
    setIcon(!isDark);
    document.dispatchEvent(new CustomEvent('wcThemeChange', { detail: { isDarkTheme: function () { return !isDark; } } }));
  });
})();
