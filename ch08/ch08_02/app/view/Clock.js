Ext.define('SCE.view.Clock', {
	extend: 'Ext.Base',

	config: {
		ctx: null,
		height: 200,
		width: 200
	},

	constructor: function(config) {
		this.initConfig(config);
		this.callParent(arguments);

		var ctx = this.getCtx();

		//Add the background image
		this.addBackgroundImage(ctx);

		//Write our own brand name "Canvas" to the watch

		var now = new Date();
		//Create an hour hand
		this.drawHourHand(ctx, now);

		//Create a minute hand
		this.drawMinuteHand(ctx, now);

		//Create a second hand
		this.drawSecondHand(ctx, now);

	},

	addBackgroundImage: function(ctx) {
		var clockImage = new Image();
		var clockImageLoaded = false;
		clockImage.onload = function(){
		   clockImageLoaded = true;
		}
		clockImage.src = 'resources/images/Clock_Face_2_by_AGF81.png';
		ctx.drawImage(clockImage, 0,0,this.getWidth(), this.getHeight());

	},

	drawHourHand: function(ctx, date) {

	},

	drawMinuteHand: function(ct, date) {

	},

	drawSecondHand: function(ctx, date) {
		var seconds = date.getSeconds();

		ctx.save();

		ctx.fillStyle = 'red';

		ctx.rotate(this.degreesToRadians(seconds * 6));

   		this.drawHand(ctx, 150);

   		ctx.restore();
	},

	degreesToRadians: function(degrees) {
	   return (Math.PI / 180) * degrees;
	}

	drawHand: function(ctx, size) {
	   ctx.beginPath();
	   ctx.moveTo(0,0); // center
	   ctx.lineTo(-4, -10);
	   ctx.lineTo(0, size * -1);
	   ctx.lineTo(4,-10);
	   ctx.lineTo(0,0);
	   ctx.fill();
	},

	writeBrandName: function(ctx) {

	}
});