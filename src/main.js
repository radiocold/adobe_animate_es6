export default class Main {
    
    constructor() 
    {
        console.log("Main fue creado !!!");
        
        this.canvas = document.getElementById("canvas");
        this.anim_container = document.getElementById("animation_container");
        this.dom_overlay_container = document.getElementById("dom_overlay_container");

        images = images||{};

        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", (evt) => { this.handleFileLoad(evt); });
        loader.addEventListener("complete", (evt) => { this.handleComplete(evt); });
        loader.loadManifest(lib.properties.manifest);
        
    }
    
    handleFileLoad(evt) 
    {	
	   if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
    }
    
    handleComplete(evt) 
    {
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(var i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        
        this.onBuildGame();
    }
    
    onBuildGame() 
    {
        // Codigo de inicio para la aplicación
        this.stage = new createjs.Stage(this.canvas);
        
        var caverman = new lib.mc_caverman();
        caverman.x = 100;
        caverman.y = 100;
        caverman.gotoAndPlay("walk");
        this.stage.addChild(caverman);
        
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.stage);
    }
}


function init() 
{
    Main.instance = new Main();
}

window.init = init;