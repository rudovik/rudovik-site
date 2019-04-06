import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor () {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints () {
		this.lazyImages.on('load', () => {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling () {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint () {
		const that = this;

		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: () => {
				that.siteHeader.toggleClass("site-header--dark");
				that.headerLinks.removeClass('is-current-link');
			}
		});
	}

	createPageSectionWaypoints () {
		const that = this;

		this.pageSections.each(function () {
			const currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				handler: (direction) => {
					if (direction === "down") {
						const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass("is-current-link");	
					}
				},
				offset: '18%'
			});

			new Waypoint({
				element: currentPageSection,
				handler: (direction) => {
					if (direction === "up") {
						const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: '-40%'
			});
		});
	}
}

export default StickyHeader;
