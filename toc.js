// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="installation.html">Installation</a></li><li class="chapter-item expanded affix "><li class="part-title">Module 1: Actions and Entries</li><li class="chapter-item expanded "><a href="challenge1/introduction.html">Overview</a></li><li class="chapter-item expanded "><a href="challenge1/slides.html">Slides &amp; Lectures</a></li><li class="chapter-item expanded "><a href="challenge1/challenge.html">Challenge</a></li><li class="chapter-item expanded affix "><li class="part-title">Module 2: Links and Collections</li><li class="chapter-item expanded "><a href="challenge2/introduction.html">Overview</a></li><li class="chapter-item expanded "><a href="challenge2/slides.html">Slides &amp; Lectures</a></li><li class="chapter-item expanded "><a href="challenge2/challenge.html">Challenge</a></li><li class="chapter-item expanded affix "><li class="part-title">Module 3: Testing and Validation</li><li class="chapter-item expanded "><a href="challenge3/introduction.html">Overview</a></li><li class="chapter-item expanded "><a href="challenge3/slides.html">Slides &amp; Lectures</a></li><li class="chapter-item expanded "><a href="challenge3/challenge.html">Challenge</a></li><li class="chapter-item expanded affix "><li class="part-title">Module 4: Scaffolding and Signals</li><li class="chapter-item expanded "><a href="challenge4/introduction.html">Overview</a></li><li class="chapter-item expanded "><a href="challenge4/slides.html">Slides &amp; Lectures</a></li><li class="chapter-item expanded "><a href="challenge4/challenge.html">Challenge</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
