(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"airplane_engine_animation_5_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"airplane_engine_animation_5_atlas_2", frames: [[0,0,1714,1080],[0,1082,350,350]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.AirplaneCutout = function() {
	this.initialize(ss["airplane_engine_animation_5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.EngineTurbine2 = function() {
	this.initialize(ss["airplane_engine_animation_5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Sky = function() {
	this.initialize(ss["airplane_engine_animation_5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.enginesymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EngineTurbine2();
	this.instance.setTransform(-101,-101,0.5772,0.5772);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enginesymbol, new cjs.Rectangle(-101,-101,202,202), null);


// stage content:
(lib.RECOVER_airplane_engine_animation_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// aircraft
	this.instance = new lib.AirplaneCutout();
	this.instance.setTransform(0,-3,0.5023,0.5023);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// turbine
	this.instance_1 = new lib.enginesymbol();
	this.instance_1.setTransform(321,372);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-5.2174},0).wait(1).to({rotation:-10.4348},0).wait(1).to({rotation:-15.6522},0).wait(1).to({rotation:-20.8696},0).wait(1).to({rotation:-26.087},0).wait(1).to({rotation:-31.3043},0).wait(1).to({rotation:-36.5217},0).wait(1).to({rotation:-41.7391},0).wait(1).to({rotation:-46.9565},0).wait(1).to({rotation:-52.1739},0).wait(1).to({rotation:-57.3913},0).wait(1).to({rotation:-62.6087},0).wait(1).to({rotation:-67.8261},0).wait(1).to({rotation:-73.0435},0).wait(1).to({rotation:-78.2609},0).wait(1).to({rotation:-83.4783},0).wait(1).to({rotation:-88.6957},0).wait(1).to({rotation:-93.913},0).wait(1).to({rotation:-99.1304},0).wait(1).to({rotation:-104.3478},0).wait(1).to({rotation:-109.5652},0).wait(1).to({rotation:-114.7826},0).wait(1).to({rotation:-120},0).wait(1).to({rotation:-125.2174},0).wait(1).to({rotation:-130.4348},0).wait(1).to({rotation:-135.6522},0).wait(1).to({rotation:-140.8696},0).wait(1).to({rotation:-146.087},0).wait(1).to({rotation:-151.3043},0).wait(1).to({rotation:-156.5217},0).wait(1).to({rotation:-161.7391},0).wait(1).to({rotation:-166.9565},0).wait(1).to({rotation:-172.1739},0).wait(1).to({rotation:-177.3913},0).wait(1).to({rotation:-182.6087},0).wait(1).to({rotation:-187.8261},0).wait(1).to({rotation:-193.0435},0).wait(1).to({rotation:-198.2609},0).wait(1).to({rotation:-203.4783},0).wait(1).to({rotation:-208.6956},0).wait(1).to({rotation:-213.913},0).wait(1).to({rotation:-219.1304},0).wait(1).to({rotation:-224.3478},0).wait(1).to({rotation:-229.5652},0).wait(1).to({rotation:-234.7826},0).wait(1).to({rotation:-240},0).wait(1).to({rotation:-245.2174},0).wait(1).to({rotation:-250.4348},0).wait(1).to({rotation:-255.6522},0).wait(1).to({rotation:-260.8696},0).wait(1).to({rotation:-266.087},0).wait(1).to({rotation:-271.3043},0).wait(1).to({rotation:-276.5217},0).wait(1).to({rotation:-281.7391},0).wait(1).to({rotation:-286.9565},0).wait(1).to({rotation:-292.1739},0).wait(1).to({rotation:-297.3913},0).wait(1).to({rotation:-302.6087},0).wait(1).to({rotation:-307.8261},0).wait(1).to({rotation:-313.0435},0).wait(1).to({rotation:-318.2609},0).wait(1).to({rotation:-323.4783},0).wait(1).to({rotation:-328.6957},0).wait(1).to({rotation:-333.913},0).wait(1).to({rotation:-339.1304},0).wait(1).to({rotation:-344.3478},0).wait(1).to({rotation:-349.5652},0).wait(1).to({rotation:-354.7826},0).wait(1).to({rotation:-360},0).wait(1));

	// sky
	this.instance_2 = new lib.Sky();
	this.instance_2.setTransform(0,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,267,480,274);
// library properties:
lib.properties = {
	id: '345587308733BD4DB210580B18251525',
	width: 960,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/airplane_engine_animation_5_atlas_1.png", id:"airplane_engine_animation_5_atlas_1"},
		{src:"images/airplane_engine_animation_5_atlas_2.png", id:"airplane_engine_animation_5_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['345587308733BD4DB210580B18251525'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;