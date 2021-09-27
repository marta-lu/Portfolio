
var words = [ 'graphic designer,', 'amante della scrittura,', 'e del mondo digitale!' ];
var counter = 0;
var word = document.getElementById('carousel-words');

setInterval(update_carousel_words, 3000);
function update_carousel_words(){
  word.innerHTML = words [counter];
  counter++;
  if(counter >= words. length){
    counter = 0;
    }
    }
