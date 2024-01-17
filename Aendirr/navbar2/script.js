document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
  
    // Video başladığında
    video.addEventListener('play', function() {
      setTimeout(function() {
        video.style.filter = 'blur(5px)'; // Video başladıktan 1 saniye sonra blur ekle
      }, 1000);
    });
  
    // Video bitimine yaklaştığında
    video.addEventListener('timeupdate', function() {
      var currentTime = video.currentTime;
      var duration = video.duration;
  
      // Son 1 saniye kala ekranı siyah yap
      if (duration - currentTime <= 1) {
        video.style.opacity = '0'; // Ekranı siyah yap
      }
    });
  });
  