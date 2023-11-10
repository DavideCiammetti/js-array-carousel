'use strict';

/* <div class="item active">
<img src="./img/01.jpg" alt="img.1" />
</div>
<div class="item active">
<img src="./img/02.jpg" alt="img.2" />
</div>
<div class="item active">
<img src="./img/03.jpg" alt="img.3" />
</div>
<div class="item active">
<img src="./img/04.jpg" alt="img.4" />
</div>
<div class="item active">
<img src="./img/05.jpg" alt="img.5" />
</div> */

const imgArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const tastoAlto = document.querySelector('.prev');
const tastoBasso = document.querySelector('.next');
const items = document.querySelector('.items');
let actualImg = 0;

for(let i= 0; i < imgArray.length; i++){

    // creo l'elemento html <div>
    const item = document.createElement('div');
    // aggiungo la classe item a div
    item.classList.add('item')
    // aggiungo l'immagine a div
    item.innerHTML += `<img src="./img/${imgArray[i]}" alt="img.1" />`;

    if(i === actualImg){
        item.classList.add('active');
    }

    items.append(item);
}

const allItem = document.querySelectorAll('.item');
console.log(allItem);

// creo evento per premere pulsante in alto
tastoAlto.addEventListener('click', function() {
    console.log(actualImg);
    if(actualImg < imgArray.length - 1){

        allItem[actualImg].classList.remove('active');
        actualImg++;
        allItem[actualImg].classList.add('active');
    }

});


// creo evento per premere pulsante in basso
tastoBasso.addEventListener('click', function() {
    console.log(actualImg);
    if(actualImg > 0 ){

        allItem[actualImg].classList.remove('active');
        actualImg--;
        allItem[actualImg].classList.add('active');
    }

});