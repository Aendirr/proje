const displacementSlider = function(opts) {
    // Your JavaScript code for the slider
    // ...
  };
  
  imagesLoaded(document.querySelectorAll('img'), () => {
    document.body.classList.remove('loading');
  
    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
      parent: el,
      images: imgs
    });
});