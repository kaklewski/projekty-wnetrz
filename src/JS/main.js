import '/scss/main.scss';

const footerYear = document.querySelector('.footer__year');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavTogglers = document.querySelectorAll('.toggle-mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

// Auto-update the date in the footer
function handleNavYear() {
	let year = new Date().getFullYear();
	footerYear.textContent = year;
}

// Open and close mobile navigation
function handleMobileNav() {
	if (mobileNav.getAttribute('data-open') === 'false') {
		mobileNav.setAttribute('data-open', 'true');
		// Lock page when mobile nav is open
		document.body.style.overflow = 'hidden';
	} else {
		mobileNav.setAttribute('data-open', 'false');

		// Unlock page when mobile nav is closed
		document.body.style.overflow = 'auto';
	}
}

document.addEventListener('DOMContentLoaded', handleNavYear);

// Open or close mobile nav when hamburger or X buttons are closed
mobileNavTogglers.forEach((button) => {
	button.addEventListener('click', handleMobileNav);
});

// Close mobile nav when a link is clicked
mobileNavLinks.forEach((button) => {
	button.addEventListener('click', handleMobileNav);
});
