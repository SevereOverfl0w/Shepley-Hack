var newImg = document.createElement('img')
newImg.src = "http://i.imgur.com/cj3W1i4.jpg"

window.addEventListener('load', function(){
  setTimeout(function(){
    document.body.appendChild(newImg);
  }, 2000);
});
