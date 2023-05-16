//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Hamburger menu button
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
});

//Function that closes the navbar after you click a link
var links = document.querySelectorAll('.nav-bar a');

links.forEach(function(link) {
  link.addEventListener('click', function() {
    var navBar = document.querySelector('.nav-bar');
    navBar.classList.remove('active');
    setTimeout(function() {
      navBar.style.transition = 'none';
    }, 300);
  });
});