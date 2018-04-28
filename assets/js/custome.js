$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.menu').addClass("sticky");

    }
    else{
        $('.menu').removeClass("sticky");
    }
});
$(document).ready(function(){
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } 
            else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        $(function(){
        $("#myBtn").click(function(event){
            event.preventDefault();
            $("html, body").animate({"scrollTop": "0px"}, 600);
        })

        });
    });
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
new WOW().init();
$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});