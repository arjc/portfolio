const sections = document.querySelectorAll(".section");
      const images = document.querySelectorAll(".profile-image");

      function updateImageVisibility() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionProgress =
            (scrollPosition - sectionTop + windowHeight) /
            (section.offsetHeight + windowHeight);

          if (sectionProgress > 0 && sectionProgress < 1) {
            const currentImage = images[index];
            const nextImage = images[index + 1];

            if (currentImage) {
              currentImage.style.opacity = 1;
              currentImage.style.clipPath = `inset(0 0 ${
                (1 - sectionProgress) * 100
              }% 0)`;
            }

            if (nextImage) {
              nextImage.style.opacity = 1;
              nextImage.style.clipPath = `inset(${
                sectionProgress * 100
              }% 0 0 0)`;
            }
          } else {
            images[index].style.opacity = 0;
          }
        });
      }

      window.addEventListener("scroll", updateImageVisibility);
      window.addEventListener("resize", updateImageVisibility);
      updateImageVisibility();