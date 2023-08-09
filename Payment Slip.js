
function input_border_assigner(flag) {

  if (flag == 1) {
    document.getElementById("find_food").style.borderTopStyle = 'none';
    document.getElementById("find_food").style.borderBottomStyle = 'groove';
    document.getElementById("find_food").style.borderRightStyle = 'none';
    document.getElementById("find_food").style.borderLeftStyle = 'none';
  }
  else {
    document.getElementById("find_food").style.borderTopStyle = 'none';
    document.getElementById("find_food").style.borderBottomStyle = 'none';
    document.getElementById("find_food").style.borderRightStyle = 'none';
    document.getElementById("find_food").style.borderLeftStyle = 'none';
  }
}

function pageScroller() {

  var navbarClassName = document.getElementsByClassName("navbar navbar-expand-lg fixed-top navbar-light");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    navbarClassName[0].style.backgroundColor = "white";
  else
    navbarClassName[0].style.backgroundColor = "transparent";
}


function validationOfButton(){

  if(document.getElementById('find_food').value == "")
      alert("Enter Pincode");
          else if(document.getElementById('find_food').value != "411005")
              alert('Mariyaan Restaurant provides services only in the area defined by pincode 411005');
                  else
                      window.location.href = "food-items.html";
                      // location.replace("foot-items.html");
}


