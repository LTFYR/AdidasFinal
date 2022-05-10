$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})



const klik = document.getElementById("hamb")
const x = document.getElementById("btn")

  klik.addEventListener("click",openNav)
function openNav() {
    document.getElementById("myNav").style.display = "inline-block";
  }
  x.addEventListener("click",closeNav)
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }