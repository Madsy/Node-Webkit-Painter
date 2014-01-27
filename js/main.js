/**
 * Created with IntelliJ IDEA.
 * User: mads
 * Date: 1/27/14
 * Time: 11:40 AM
 * To change this template use File | Settings | File Templates.
 */


var g_Canvas = null;
var g_Context = null;

var painterInit = function() {
    var cp, cc;

    cp = document.getElementById("canvas-painter");
    cc = cp.getContext("2d");
    g_Canvas = cp;
    g_Context = cc;
}

var painterMain = function() {
    painterInit();
    g_Context.fillStyle = 'blue';
    g_Context.clearRect(0, 0, g_Canvas.width, g_Canvas.height);
    g_Context.fillRect(0,0, g_Canvas.width, g_Canvas.height);

    // setup the line style
    g_Context.strokeStyle = '#fa00ff';
    g_Context.lineWidth = 5;
    g_Context.lineCap = 'round';

// draw the arc path
// (I'll walk you through these values momentarily - bear with me!)
    g_Context.arc(50, 50, 20, 0, Math.PI, false);

// colour the path
    g_Context.stroke();
}

painterMain();

