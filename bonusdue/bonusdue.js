'use strict';
// bonus 2

//<div class="right-box">
//<img src="../img/02.jpg" alt="img.2" />
// </div>
// <div class="right-box">
//<img src="../img/02.jpg" alt="img.2" />
// </div>
// <div class="right-box">
//<img src="../img/02.jpg" alt="img.2" />
// </div>
// <div class="right-box">
 //<img src="../img/02.jpg" alt="img.2" />
// </div>
// <div class="right-box">
//<img src="../img/02.jpg" alt="img.2" />
// </div>

// variabili della parte di destra
const rightContainer = document.querySelector('.right-container');  

const imgArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const rightArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
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
    item.innerHTML += `<img src="../img/${imgArray[i]}" alt="img.1" />`;

    if(i === actualImg){
        item.classList.add('active');
    }

    items.append(item);
}

// parte di destra foto piccole
for(let i= 0; i < rightArray.length; i++){

    // creo l'elemento html <div>
     const rightBox = document.createElement('div');
     // aggiungo la classe right-box a div
     rightBox.classList.add('right-box', 'gray-scale');
     // aggiungo l'immagine a div
     rightBox.innerHTML += `<img src="../img/${imgArray[i]}" alt="img.1" />`;
    
     rightContainer.append(rightBox);
 }
 
const allItem = document.querySelectorAll('.item');
console.log(allItem);


// creo evento per premere pulsante in alto
tastoAlto.addEventListener('click', function() {
    console.log(actualImg);

    if(actualImg < imgArray.length -1){
        console.log(`array ${imgArray.length}`);

        allItem[actualImg].classList.remove('active');
        actualImg++;
        allItem[actualImg].classList.add('active');

    }else if(actualImg === 4){
        allItem[actualImg].classList.remove('active');
        actualImg = 0;
        imgArray.length = 5;
        allItem[actualImg].classList.add('active');
    }
     
});

// creo evento per premere pulsante in basso
tastoBasso.addEventListener('click', function() {
    console.log(`immagine attuale ${imgArray.actualImg}`);
    if(actualImg > 0){

        allItem[actualImg].classList.remove('active');
        actualImg--;
        allItem[actualImg].classList.add('active');

    }else if(actualImg === 0){
        allItem[actualImg].classList.remove('active');
        actualImg = 4;
        imgArray.length = 0;
        allItem[actualImg].classList.add('active');
    }

});