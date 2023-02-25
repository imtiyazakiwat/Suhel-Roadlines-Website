new Glide(".glide", {
  type: "carousel",
  perView: 3,
  gap: 30,
  autoplay: 3000,
  hoverpause: true,
  breakpoints: {
    1024: {
      perView: 2,
    },
    768: {
      perView: 1,
    }
  }
});
