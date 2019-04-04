import $ from 'jquery';

class MobileMenu {
	constructor () {
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
		this.siteHeader = $('.site-header');
	}

	events () {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu () {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;
