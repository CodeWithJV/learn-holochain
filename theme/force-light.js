// Force light theme on all pages
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.remove('coal');
    document.documentElement.classList.remove('navy');
    document.documentElement.classList.remove('ayu');
    document.documentElement.classList.remove('rust');
    document.documentElement.classList.add('light');
    
    // Try to set localStorage
    try {
      localStorage.setItem('mdbook-theme', 'light');
    } catch(e) {}
  });
})();