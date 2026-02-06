// ---------------------------------------------------------
//  CONFIGURATION
// ---------------------------------------------------------
const siteName = 'DAHLKE<span class="text-blue-500">MEDIA</span>';

const navLinks = [
    { name: 'Home', link: '../index.html' }
];

// ---------------------------------------------------------
//  HTML COMPONENTS (NAV & FOOTER)
// ---------------------------------------------------------

const navbarHTML = `
<nav class="bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
                <a href="../index.html">
                    <img src="../../assets/logos/DMCombinationLogo.svg" alt="Dahlke Media" class="h-10 w-auto">
                </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 items-center" id="desktop-menu-container">
                <!-- Links injected by JS -->
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center md:hidden">
                <button id="mobile-menu-btn" class="text-slate-400 hover:text-white focus:outline-none p-2">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden hidden bg-slate-900 border-b border-slate-800 absolute w-full" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3" id="mobile-menu-container">
            <!-- Mobile Links injected by JS -->
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-black text-slate-500 py-8 border-t border-slate-900 mt-auto">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <a href="../copyright.html"><div class="mb-4 md:mb-0">
            &copy; <span id="year">${new Date().getFullYear()}</span> Dahlke Media. All rights reserved.
        </div></a>
        <div class="text-sm flex gap-4">
            <a href="https://instagram.com/Dahlke_Media" class="hover:text-slate-300 transition">Instagram</a>
            <a href="mailto:contact@dahlkemedia.com" class="hover:text-slate-300 transition">Email</a>
        </div>
    </div>
</footer>
`;

// ---------------------------------------------------------
//  INJECTION LOGIC
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    // 1. Inject Structure
    const navPlaceholder = document.getElementById('global-nav');
    const footerPlaceholder = document.getElementById('global-footer');

    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // 2. Generate Links based on current page
    const desktopContainer = document.getElementById('desktop-menu-container');
    const mobileContainer = document.getElementById('mobile-menu-container');
    
    // Get current file name (e.g., "index.html")
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    navLinks.forEach(item => {
        // Determine if this is the active page
        const isActive = item.link === currentPage;

        // Desktop Link Style
        const dLink = document.createElement('a');
        dLink.href = item.link;
        dLink.innerText = item.name;
        dLink.className = isActive 
            ? "text-white bg-slate-800 px-3 py-2 rounded-md font-medium transition" // Active
            : "text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition"; // Inactive
        desktopContainer.appendChild(dLink);

        // Mobile Link Style
        const mLink = document.createElement('a');
        mLink.href = item.link;
        mLink.innerText = item.name;
        mLink.className = isActive
            ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-slate-800"
            : "block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800";
        mobileContainer.appendChild(mLink);
    });

    // 3. Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// ---------------------------------------------------------
//  Favicon Logo Auto Set Correct Color Version
// ---------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    // 1. Inject Structure
    const navPlaceholder = document.getElementById('global-nav');
    const footerPlaceholder = document.getElementById('global-footer');

    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // 2. Generate Links based on current page
    const desktopContainer = document.getElementById('desktop-menu-container');
    const mobileContainer = document.getElementById('mobile-menu-container');
    
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    navLinks.forEach(item => {
        const isActive = item.link === currentPage;
        
        // Desktop Link
        const dLink = document.createElement('a');
        dLink.href = item.link;
        dLink.innerText = item.name;
        dLink.className = isActive 
            ? "text-white bg-slate-800 px-3 py-2 rounded-md font-medium transition" 
            : "text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md font-medium transition";
        desktopContainer.appendChild(dLink);

        // Mobile Link
        const mLink = document.createElement('a');
        mLink.href = item.link;
        mLink.innerText = item.name;
        mLink.className = isActive
            ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-slate-800"
            : "block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800";
        mobileContainer.appendChild(mLink);
    });

    // 3. Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ---------------------------------------------------------
    // 4. DYNAMIC FAVICON INJECTION
    // ---------------------------------------------------------
    
    // Check if we are in a subfolder (like /albums/) to fix the path
    // If the URL contains a slash after the domain, we might need '../'
    // NOTE: If you host this, using absolute paths (e.g., "/assets/...") is safer.
    const pathPrefix = window.location.pathname.includes('/') && window.location.pathname.split('/').length > 2 ? '../' : '';

    const favicons = [
        // Light Mode -> Use Black Logo
        { 
            href: `${pathPrefix}assets/logos/DMLogo_Black.svg`, 
            media: '(prefers-color-scheme: light)' 
        },
        // Dark Mode -> Use White Logo
        { 
            href: `${pathPrefix}assets/logos/DMLogo_White.svg`, 
            media: '(prefers-color-scheme: dark)' 
        }
    ];

    favicons.forEach(iconData => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = iconData.href;
        link.media = iconData.media;
        document.head.appendChild(link);
    });
});
