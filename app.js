require('Bridge');
require('Common');

var $ = process.bridge.objc;

var win = new Window();

win.extendIntoTitle = true;
win.titleTransparent = true;
win.alwaysOnTop = true;
win.textured = true;
win.titleVisible = false;
win.width = 280;
win.height = 370;
// win.shadow = false;

var view = new WebView();
view.alpha = 0.98;
view.top = 0;
view.left = view.right = view.bottom = 0;
view.transparent = true;
view.location = 'app://src/gui/index.html';
view.addEventListener('message', function (e) {
    console.log(e);
    win.width = 440;
});
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

win.animateOnSizeChange = true;
win.animateOnPositionChange = true;
// win.maximizeButton = false;
win.resizable = false;
win.visible = true;
