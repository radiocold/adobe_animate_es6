export default class Main {
    
    constructor() 
    {
        var movie = new lib.mc_caverman();
        movie.x = 150;
        movie.y = 150;
        movie.gotoAndPlay("walk");
        stage.addChild(movie);
    }
}


window.onInitApp = function() 
{
    Main.instance = new Main();
}
