require('Bridge');
require('Common');

var $ = process.bridge.objc;

var win = new Window();
// win.frame = false;
win.extendIntoTitle = true;
win.titleTransparent = true;
win.titleVisible = false;
win.backgroundColor = 'rgba(0,0,0,0)'; //'#1C2029';
win.width = 280;
win.height = 370;
win.shadow = false;

var view = new WebView();
view.alpha = 0.98;
view.top = 0;
view.left = view.right = view.bottom = 0;
view.transparent = true;
view.location = 'app://src/gui/index.html';
win.appendChild(view);

var text = new TextInput();
text.value = 'Telepathize';
text.readonly = true;
text.top = 3;
text.center = 0;
text.textcolor = 'rgba(158, 157, 156, 1)';
var font = $.NSFont('fontWithName', $('Helvetica Neue'), 'size', 11);
text.nativeView('setFont', font);
// win.appendChild(text);

application.icon = 'http://img02.cdn2-rdio.com/album/4/9/2/0000000000018294/2/square-1200.jpg';

win.visible = true;
win.canBeFullscreen = true;
// win.maximizeButton = false;
win.alwaysOnTop = true;
win.resizable = false;
