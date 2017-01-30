$(document).ready(function() {
  //$(".fade-element").hide().each(function(i) {
  //  $(this).delay(i*1200).fadeIn(1500);
  //});

  $(".button").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#music")[0].play();
  });

  $(".button10").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen10")[0].play();
  });

  $(".button9").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen9")[0].play();
  });

  $(".button8").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen8")[0].play();
  });

  $(".button7").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen7")[0].play();
  });

  $(".button6").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen6")[0].play();
  });

  $(".button5").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen5")[0].play();
  });

  $(".button4").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen4")[0].play();
  });

  $(".button3").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen3")[0].play();
  });

  $(".button2").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen2")[0].play();
  });

  $(".button1").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen1")[0].play();
  });

  $(".button0").click(function() {
    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $("#gen0")[0].play();
  });

  $(".scroll-down").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  $(".scroll-up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});
