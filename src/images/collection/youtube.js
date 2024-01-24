
var player
var staticPlayer
function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady')
    player = new YT.Player('player', {
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo() // autostart
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // do other custom stuff here
      //setTimeout(stopVideo, 6000);
      //done = true;
    }
}

function stopVideo() {
    player.stopVideo()
}

function loadYouTubeVideo() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

var dynamicVideoModal = document.getElementById('dynamicVideoModal')
dynamicVideoModal.addEventListener('show.bs.modal', function (event) {
    // dynamically create video inside modal
    // loadYouTubeVideo()
})
dynamicVideoModal.addEventListener('hidden.bs.modal', event => {
    player.stopVideo()
})


// manual controls outside YT
const playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click', function (event) {
    player.playVideo()
})

const pauseBtn = document.getElementById('pauseBtn')
pauseBtn.addEventListener('click', function (event) {
    console.log('pause')
    player.pauseVideo()
})

const myModalEl = document.getElementById('videoModal')
myModalEl.addEventListener('show.bs.modal', event => {
    staticPlayer = new YT.Player('staticPlayer')
})
myModalEl.addEventListener('hidden.bs.modal', event => {
    staticPlayer.stopVideo()
})
