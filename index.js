function noBeDraggable(){
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++)
    images[i].setAttribute('draggable', 'false');
}

noBeDraggable();
window.addEventListener('DOMNodeInserted', noBeDraggable);
window.addEventListener('DOMElementNameChanged', noBeDraggable);
window.addEventListener('load', noBeDraggable); // Script may be BEFORE images on load.
