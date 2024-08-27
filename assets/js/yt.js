var players = [];

// 初始化 YouTube 播放器
function onYouTubeIframeAPIReady() {
  var videoIds = ['youtube-video-1', 'youtube-video-2', 'youtube-video-3', 'youtube-video-4', 'youtube-video-5', 'youtube-video-6'];
  
  videoIds.forEach(function(videoId) {
    var player = new YT.Player(videoId, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
    players.push(player);
  });
}

// 监听视频状态变化
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.stopVideo();
  }
}
