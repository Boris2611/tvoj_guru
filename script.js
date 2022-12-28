const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});




//------------ Loading ---------------

$( window ).on( "load", function() {
        $(this).scrollTop(0);
        $(".loader_wrapper").fadeOut("slow");
});



// --------- Scroll Down Button --------------
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });



  // ----------- TIME -------------------

  setInterval( () => {
    let hours = document.getElementById('hours');
    let minutes = document. getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById ('ss');
    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds( )

    //convert 24hr clock to 12hr clock
    if (h > 12) {
        h = h - 12;
    }
    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<span>Hours</span>";
    minutes.innerHTML = m + "<span>Minutes</span>";
    seconds.innerHTML = s + "<span>Seconds</span>"


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12 hrs clock
    mm.style. strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot. style.transform = `rotate(${m * 6}deg)`;
    sec_dot. style.transform = `rotate(${s * 6}deg)`;
});