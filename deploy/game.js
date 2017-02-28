(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.caverman = function() {
	this.initialize(img.caverman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,497);


(lib.mc_caverman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:21,jump:35,fall:41});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay("stand");
	}
	this.frame_34 = function() {
		this.gotoAndPlay("walk");
	}
	this.frame_40 = function() {
		this.gotoAndPlay("jump");
	}
	this.frame_46 = function() {
		this.gotoAndPlay("fall");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(14).call(this.frame_34).wait(6).call(this.frame_40).wait(6).call(this.frame_46).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-45.5,-38.5)).s().p("AnGGBIAAsBIONAAIAAMBg");
	this.shape.setTransform(-0.5,-26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-141.5,-34)).s().p("AmeFUIAAqnIM9AAIAAKng");
	this.shape_1.setTransform(-1.4,-31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-242.5,-35.5)).s().p("AlOFjIAArFIKdAAIAALFg");
	this.shape_2.setTransform(2.6,-29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-343.5,-36.5)).s().p("AmKFtIAArZIMVAAIAALZg");
	this.shape_3.setTransform(6.6,-28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-432.5,-37)).s().p("AnaFyIAArjIO1AAIAALjg");
	this.shape_4.setTransform(-1.5,-28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-432.5,-496.5)).s().p("AnaAFIAAgJIO1AAIAAAJg");
	this.shape_5.setTransform(-0.5,431.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-533.5,-37)).s().p("AnkFyIAArjIPJAAIAALjg");
	this.shape_6.setTransform(2.5,-28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-533.5,-496.5)).s().p("AnkAFIAAgJIPJAAIAAAJg");
	this.shape_7.setTransform(1.5,431.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-49.5,-107)).s().p("AnuFeIAAq7IPdAAIAAK7g");
	this.shape_8.setTransform(3.5,-28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-140,-109)).s().p("AliF3IAArtILFAAIAALtg");
	this.shape_9.setTransform(-4.4,-21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-237.8,-108.3)).s().p("Ak4F+IAAr8IJxAAIAAL8g");
	this.shape_10.setTransform(-4.2,-21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-339.8,-110)).s().p("AmbGLIAAsVIM3AAIAAMVg");
	this.shape_11.setTransform(0.8,-20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-437.5,-107.3)).s().p("AmtF6IAAryINbAAIAALyg");
	this.shape_12.setTransform(4.5,-28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-533.8,-107)).s().p("AnhFyIAArjIPDAAIAALjg");
	this.shape_13.setTransform(4.3,-27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-43.3,-174.5)).s().p("AmwFoIAArPINhAAIAALPg");
	this.shape_14.setTransform(-0.7,-29.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-142.8,-177.8)).s().p("AnxF1IAAroIPjAAIAALog");
	this.shape_15.setTransform(1.8,-27.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-235,-177)).s().p("AmPFZIAAqxIMfAAIAAKxg");
	this.shape_16.setTransform(-6,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-339.5,-184)).s().p("AoCGpIAAtRIQFAAIAANRg");
	this.shape_17.setTransform(1.5,-19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-434.5,-185.5)).s().p("AmyGkIAAtHINlAAIAANHg");
	this.shape_18.setTransform(-0.5,-17.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-525,-184.5)).s().p("AlxHMIAAuXILjAAIAAOXg");
	this.shape_19.setTransform(-9,-18.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-48,-142.7)).s().p("AnfWUMAAAgsmIAUAAMAAAAhMIOrAAIAALag");
	this.shape_20.setTransform(-1,-131.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(img.caverman, null, new cjs.Matrix2D(1,0,0,1,-149.5,-248.9)).s().p("An4FjIAArEIPxAAIAALEg");
	this.shape_21.setTransform(3.5,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-65,91.1,77.1);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		onInitApp();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#66CC00",
	opacity: 1.00,
	manifest: [
		{src:"images/caverman.png?1487893267846", id:"caverman"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;