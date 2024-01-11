
/*
var divs = document.getElementsByClassName('content_div');


function toggle(id) {
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (div.id == id)
        
          div.style.display = 'block';
        
        else
          div.style.display = 'none';
        
      }


}


*/

var divs = ["about", "commission", "updates"];
var visibleDivId = null;
function toggle(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.classList.add("show");
    } else {
      div.classList.remove("show");
    }
  }
}