

var divs = document.getElementsByClassName('gallery_div');


function toggle(id) {
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (div.id == id)
          div.style.display = 'block';
        else
          div.style.display = 'none';
      }


}
