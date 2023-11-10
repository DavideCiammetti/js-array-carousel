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
const items = document.querySelector('.items');

for(let i= 0; i < imgArray.length; i++){

    const item = document.createElement('div');
    item.innerHTML += `<div class="item active"><img src="./img/${imgArray[i]}" alt="img.1" /></div>`;

    items.append(item);

}