//variables

//Products amounts
let input = document.querySelector('#amounts');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let counter = 0;

//modal navbar vars
const menuIcon = document.querySelector('.menu-icon');
const modalN = document.querySelector('.modal-navbar');
const closeMN = document.querySelector('.close-icon-mn');

//modal cart vars (mobile)
const modalC = document.querySelector('.cart-modal');
const cart = document.querySelector('.cart1');
let notification = document.querySelector('.notification');

//Buy an item vars
let amountBy = document.querySelector('#amount');
let total = document.querySelector('#total');
const btnAdd = document.querySelector('#btn-add');
let amountZ = 0;
let totalAmount = 0;

//delete an item vars
const checkoutSpace = document.querySelector('.checkout-notification');
const deleteIcon = document.querySelector('.delete');
const description = document.querySelector('.checkout-details');
const noItems = document.querySelector('.just-alig-text');
const checkBtn = document.querySelector('.checkout');

//change image vars (mobile)
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
let images = document.querySelector('.gallery-photos');
let imgCounter = 0;
let imagesDiv = [`url('./images/image-product-1.jpg')`, `url('./images/image-product-2.jpg')`, `url('./images/image-product-3.jpg')`, `url('./images/image-product-4.jpg')`]

//change image vars (desktop)
const img1 = document.querySelector('#mg1');
const img2 = document.querySelector('#mg2');
const img3 = document.querySelector('#mg3');
const img4 = document.querySelector('#mg4');

//modal gallery vars
const mGallery = document.querySelector('.modal');
const closeMG = document.querySelector('.mg-close');
const mgprev = document.querySelector('.mg-previous');
const mgnext = document.querySelector('.mg-next');
const mImg1 = document.querySelector('#g1');
const mImg2 = document.querySelector('#g2');
const mImg3 = document.querySelector('#g3');
const mImg4 = document.querySelector('#g4');
const mgGallery = document.querySelector('.mg-photos')

//events

//To increase one items
plus.addEventListener('click', ()=>{  
    counter++
    if (counter <= 50) {
        input.textContent = counter;
    } else {return}
})

//To decrease one item
minus.addEventListener('click', ()=>{  
    counter--
    if (counter >= 0) {
        input.textContent = counter;
    } else {return}
})

//To make the modal navbar visible
menuIcon.addEventListener('click', ()=>{
    modalN.style.display = 'block';
})

//To hide the modal navbar
closeMN.addEventListener('click', ()=>{
    modalN.style.display = 'none';
})

//To make the modal cart visible and delete the notification value if there's any
cart.addEventListener('click', ()=>{
    modalC.classList.toggle('block');
    if (notification.textContent !== '') {
        notification.style.display = 'none';
    }
})

//The notification receives the amount
//That amount is used to make the general operation
//if the button is clicked again, acumulate the value to the previous one
//finally, display the amount into the notification bar
btnAdd.addEventListener('click', ()=>{
    if (input.textContent !== '0') {
        notification.style.display = 'block';
        noItems.style.display = 'none';
        description.style.display = 'flex';
        checkBtn.style.display = 'block';

        if (amountZ > 50) {return}
        amountZ = amountZ + parseInt(input.textContent);
        notification.textContent = amountZ;

        totalAmount = 125 * amountZ;
        amountBy.textContent = amountZ;
        total.textContent = `$${totalAmount.toFixed(2)}`;
    }
})


//To reset the entire page's all values
deleteIcon.addEventListener('click', ()=>{
    notification.textContent = '';
    notification.style.display = 'none';
    description.style.display = 'none';
    checkBtn.style.display = 'none';

    noItems.style.display = 'flex';
    amountZ = 0;
    totalAmount = 0;
    total.textContent = `$0.00`;
})

/* --------------------------------------------- */

//To change to the next photo
next.addEventListener('click', ()=>{
    nextImg(images);
})

//To change to the previous photo
prev.addEventListener('click', ()=>{
    previous(images);
})

img1.addEventListener('click', ()=>{
    changeInDesktop(0, images);
})

img2.addEventListener('click', ()=>{
    changeInDesktop(1, images);
})

img3.addEventListener('click', ()=>{
    changeInDesktop(2, images);
})

img4.addEventListener('click', ()=>{
    changeInDesktop(3, images);
})

/* --------------------------------------------- */

    images.addEventListener('click', ()=>{
        mGallery.classList.add('flex2');
    })
    
    closeMG.addEventListener('click', ()=>{
        mGallery.classList.remove('flex2');
    })


/* --------------------------------------------- */

mImg1.addEventListener('click', ()=>{
    changeInDesktop(0, mgGallery);
})

mImg2.addEventListener('click', ()=>{
    changeInDesktop(1, mgGallery);
})

mImg3.addEventListener('click', ()=>{
    changeInDesktop(2, mgGallery);
})

mImg4.addEventListener('click', ()=>{
    changeInDesktop(3, mgGallery);
})

/* --------------------------------------------- */

mgprev.addEventListener('click', ()=>{
    previous(mgGallery);
})

mgnext.addEventListener('click', ()=>{
    nextImg(mgGallery);
})

/* --------------------------------------------- */


//functions
function previous(frame) {
    if (imgCounter !== 0) {
        imgCounter--    
        frame.style.backgroundImage = imagesDiv[imgCounter];
    }
}

function nextImg(frame) {
    if (imgCounter !== 3) {
        imgCounter++
        frame.style.backgroundImage = imagesDiv[imgCounter];
    }
}

function changeInDesktop(i, frame) {
    frame.style.backgroundImage = imagesDiv[i];
}