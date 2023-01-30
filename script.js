var typed = new Typed(".typed", {
  strings: ["I'm a CS student\nat Toronto Metropolitan University.\nI enjoy making things, come take a look!"],
  typeSpeed: 80,
  onComplete: function() {
    $(".projects-button").css("visibility", "visible");
  }
});