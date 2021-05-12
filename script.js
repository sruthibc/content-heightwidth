

document.addEventListener("DOMContentLoaded", function(event) { 
    
    var text = "This is your Sample"
    var font = "50px Shadows Into Light";

    var canvas = document.getElementById('canvas');
    var cx = canvas.getContext("2d");

    cx.font = font;
    metrics = cx.measureText(text);
    
    var cxwidth = metrics.actualBoundingBoxRight;
    var cxheight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    
    canvas.width = cxwidth;
    canvas.height = cxheight;
    
    cx.font = font;
    
    console.log("Width: "+cxwidth+"px");
    console.log("Height: "+cxheight+"px");
    
    cx.fillStyle = "#000000"						
    
    cx.fillText(text,0,metrics.actualBoundingBoxAscent);	
    		
});