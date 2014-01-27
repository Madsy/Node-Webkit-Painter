/**
 * Created with IntelliJ IDEA.
 * User: mads
 * Date: 1/27/14
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */


var g_Canvas = null;
var g_Context = null;
var g_ColorPicker = null;

var painterInit = function() {
    var cp, cc, cp;

    cp = document.getElementById("canvas-painter");
    cc = cp.getContext("2d");
    cp = document.getElementById("picked-color");
    g_Canvas = cp;
    g_Context = cc;
    g_ColorPicker = cp;

    if(g_ColorPicker === null){
        console.log("color picker is null");
    } else if(g_ColorPicker === undefined){
        console.log("color picker is undefined");
    }
    g_ColorPicker.onchange = function(){
        console.log("color changed to: " + g_ColorPicker.value);
    }
    console.log("Starting..");
}

var painterMain = function() {
    painterInit();
    g_Context.fillStyle = 'blue';
    g_Context.clearRect(0, 0, g_Canvas.width, g_Canvas.height);
    g_Context.fillRect(0,0, g_Canvas.width / 2, g_Canvas.height / 2);

    g_Context.strokeStyle = '#fa00ff';
    g_Context.lineWidth = 5;
    g_Context.lineCap = 'round';
    g_Context.arc(50, 50, 20, 0, Math.PI, false);

// colour the path
    g_Context.stroke();
}

document.onload = painterMain();

