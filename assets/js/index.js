
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


    const gra = function(min, max) {
        return Math.random() * (max - min) + min;
    }
    const init = function(){
      let items = document.querySelectorAll('section');
      for (let i = 0; i < items.length; i++){
        items[i].style.background = randomColor({luminosity: 'light'});
      }
      cssScrollSnapPolyfill()
    }
    init();
