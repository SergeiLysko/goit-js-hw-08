<script src="https://player.vimeo.com/api/player.js"></script>;
<iframe
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
></iframe>;
<script>
  const iframe = document.querySelector('iframe'); 
  const player = new Video.Player(iframe); 
  player.on(‘timeupdate’,function()){''}
  {console.log('played the video!')};
  player.getVideoTitle().then(function(title) {console.log('title:', title)})
</script>;