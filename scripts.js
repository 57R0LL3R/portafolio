    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
      const images = slider.querySelectorAll('img');
      let index = 0;
      setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
      }, 4000);
    });