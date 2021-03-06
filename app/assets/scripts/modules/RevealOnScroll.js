import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor (els, offset) {
		this.itemsToReveal = els;
		this.offset = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially () {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints () {
		const that = this;

		this.itemsToReveal.each(function () {
			let currentItem = this;

			return new Waypoint({
				element: currentItem,
				handler: () => {
					$(currentItem).toggleClass("reveal-item--is-visible");
				},
				offset: that.offset
			});
		});
	}
}

export default RevealOnScroll;
