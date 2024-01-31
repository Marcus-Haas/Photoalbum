let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg',
    'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
    'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg'];


function renderImages() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('img-box').innerHTML += generateImagebox(i);
    }
}


function generateImagebox (i){
    return /*html*/`
    <div class="img-box">
        <img onclick="openImage(${i})" src="${images[i]}">
    </div>
    `;
}

 
function hideGallery() {
    document.getElementById('header').classList.add('d-none');
    document.getElementById('img-box').classList.add('d-none');
}

function showGallery() {
    document.getElementById('header').classList.remove('d-none');
    document.getElementById('img-box').classList.remove('d-none');
}


function openImage(i) {
    hideGallery();
    document.getElementById('blackbox').innerHTML = generateBlackbox(i);
}


function generateBlackbox(i) {
    return /*html*/ `
    <img class="close" onclick="closeImage()" src="./img/close.png" title="close">
    <div class="blackbox">
        <img class="arrow-left" src="./img/arrow-left.png" onclick="moveImageBackward(${i})" title="previous picture">
        <img class="img-big" src="${images[i]}">
        <img class="arrow-right" src="./img/arrow-right.png" onclick="moveImageForward(${i})" title="next picture">
    </div>`;
}


function closeImage() {
    document.getElementById('blackbox').innerHTML = '';
    showGallery();
}


function moveImageForward(i) {
    let index = i + 1;
    if (index == images.length) {
        index = 0;
    }
    openImage(index);
}


function moveImageBackward(i) {
    let index = i - 1;
    if (index == -1) {
        index = images.length - 1;
    }
    openImage(index);
}