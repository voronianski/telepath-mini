var ProgressBar = require('progressbar.js');

var progressBar = new ProgressBar.Circle('#circle-bar', {
    // color: '#DE428F', '#81BE40', '#3A9BD7'
    color: '#E41F1F',
    strokeWidth: 2.3,
    trailWidth: 2,
    trailColor: 'rgba(255,255,255,.1)',
    easing: 'easeIn'
});

progressBar.animate(0.65);

var $coverBar = document.querySelectorAll('.cover')[0];
var $menuLink = document.querySelectorAll('.menu-show')[0];
var $menuWrap = document.querySelectorAll('.menu-wrap')[0];

$menuLink.addEventListener('click', function () {
    // $coverBar.classList.add('blur');
    // $menuWrap.classList.add('slide-in');
    window.postMessageToHost('resize');
});
