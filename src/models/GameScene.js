import device;
import ui.View as View;
import ui.ImageView as ImageView;

import src.models.Can as Can;

exports = Class(View, function (supr) {
	this._backgroundView = null;
	this._baseWidth = 0;
	this._baseHeight = 0;
	this.init = function (args) {
		supr(this, 'init', [args]);
		this._baseWidth = args.baseWidth;
		this._baseHeight = args.baseHeight;
		this.build();
	};

	this.build = function build() {

		// this._backgroundView = new ImageView({
		// 	superview: this,
		// 	image: 'resources/images/ui/background.png',
		// 	x: 0,
		// 	y: 0,
		// 	width: this._baseWidth,
		// 	height: this._baseHeight
		// });

		var can = new Can({
			colorType: 0,
			position: [0, 0]
		});

		this.addSubview(can);
	};
});