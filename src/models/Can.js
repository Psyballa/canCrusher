import device;
import ui.View as View;
import ui.SpriteView as SpriteView;

var CAN_SIZE = 56; // All sprites are 60x60
exports = Class(View, function (supr) {
	this._sprite = null;
	this._position = null;
	this._colorType = null;
	this.init = function (args) {
		args = merge(
			args,
			{
				x: 0,
				y: 0,
				width: CAN_SIZE,
				height: CAN_SIZE
			}
		)
		this._colorType = args.colorType;
		this._position = args.position;
		supr(this, 'init', [args]);
		this.build(args);
	}

	this.build = function build(args) {
			this._sprite = this._buildSheetData();
			this._sprite.startAnimation('crush', {loop: true});
	}
	this._buildSheetData = function _buildSheetData() {
		var canSheetData = {
			url: 'resources/images/canPieces/canAnim_0' + this._colorType + '.png',
			width: CAN_SIZE,
			height: CAN_SIZE,
			startX: 0,
			startY: 0,
			anims: {
				crush: 
					[ 
						[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
						[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
						[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
						[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3],
						[0, 4], [1, 4], [2, 4], [3, 4], [4, 4]
					],
				idle: [[0, 0]]
			}
		}
		return new SpriteView({
			superview: this,
			sheetData: canSheetData,
			x: 0,
			y: 0,
			width: CAN_SIZE,
			height: CAN_SIZE
		});
	}
})