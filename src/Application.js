import device;
import src.models.GameScene as GameScene;

var BOUNDS_WIDTH = 576;
exports = Class(GC.Application, function () {
	this._baseWidth = 0;
	this._baseHeight = 0;
	this._scale = 0;
	this.initUI = function () {
		this.scaleUI();
		var gameScene = new GameScene({
			superview: this,
			baseWidth: this._baseWidth,
			baseHeight: this._baseHeight
		});
	};

	this.launchUI = function () {

	};

	this.scaleUI = function scaleUI() {
		this._baseWidth = BOUNDS_WIDTH;
		this._baseHeight = device.height * (BOUNDS_WIDTH / device.width);
		this._scale = device.width / this._baseWidth;

		this.view.style.scale = this._scale;
	};
});
