(function () {
  var $ = window.jQuery;
  if (!$) return;
  $(document).on('click', '.js-dark-toggle', function (e) {
    e.preventDefault();
    var isDark = document.body.classList.contains('dark');
    document.body.classList.toggle('dark', !isDark);
    localStorage.setItem('wcTheme', isDark ? '0' : '1');
    var hl = document.querySelector('link[title="hl-light"]'), hd = document.querySelector('link[title="hl-dark"]');
    if (hl) hl.disabled = isDark;
    if (hd) hd.disabled = !isDark;
    document.dispatchEvent(new CustomEvent('wcThemeChange', { detail: { isDarkTheme: function () { return !isDark; } } }));
  });
})();
