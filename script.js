  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.

    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.

    // 5. Also modify the DOM to hide the "More info..." link.

window.addEventListener("load", function() {

  var picture = document.getElementsByClassName('picture')[0];
  var client = document.getElementsByClassName('client')[0];
  var description = document.getElementsByClassName('description')[0];

  picture.addEventListener("mouseenter", function(){
    client.style.opacity = "1";
    description.style.opacity = "1";
  });

  picture.addEventListener("mouseleave", function(){
    client.style.opacity = "0"
    description.style.opacity = "0"
  });

  var imagesone = document.getElementsByClassName('images')[0];
  var imagestwo = document.getElementsByClassName('images')[1];
  var imagesthree = document.getElementsByClassName('images')[2];
  var barsone = document.getElementsByClassName('first')[0];
  var barstwo = document.getElementsByClassName('second')[0];
  var barsthree = document.getElementsByClassName('third')[0];

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 39:
        if (imagesone.style.display == "flex") {
          imagestwo.style.display = "flex";
          imagesone.style.display = "none";
          barsone.style.opacity = .2
          barstwo.style.opacity = 1
          break;
        } else {
          imagestwo.style.display = "none";
          imagesthree.style.display = "flex";
          barsthree.style.opacity = 1
          barstwo.style.opacity = .2
          break;
        }
      case 37:
        if (imagesthree.style.display == "flex") {
          imagesthree.style.display = "none";
          imagestwo.style.display = "flex";
          barsthree.style.opacity = .2
          barstwo.style.opacity = 1
          break;
        } else {
          imagestwo.style.display = "none";
          imagesone.style.display = "flex";
          barsone.style.opacity = 1
          barstwo.style.opacity = .2
          break;
        }
      }
  };

});

