

window.addEventListener('scroll', reveal);                          // Registering a scroll event
function reveal(){
    var reveals = document.querySelectorAll('.reveal');             // List of sections with reveal class
    // alert(reveals[0].getBoundingClientRect().top)        
    for(var i = 0; i < reveals.length; i++){        
        var windowHeight = window.innerHeight;                      // Current Window height except navbar
        var revealTop = reveals[i].getBoundingClientRect().top;     // Distance of sections from top side
        var revealpoint=150; // pixels by which a section is pushed below

        if(revealTop < windowHeight - revealpoint){                 // if distance to the section is less 
            reveals[i].classList.add('active');                     // than 360 then attach active class
        }
        else
            reveals[i].classList.remove('active');                  // When distance is too much remove the active class
    }
}

// 915 < 565
// window height - 715 common
// reveal point 150px 
// starting point is 901px
// 306px for first animation
// 915 < 710 - 306