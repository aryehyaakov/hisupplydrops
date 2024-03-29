// Get the modal
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('.item img');
var modalImg = document.getElementById('fullImage');

img.forEach(function(item) {
  item.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.getAttribute('data-fullimage');
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
