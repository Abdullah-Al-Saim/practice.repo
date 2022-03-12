const images = [
    'images2/download (1).jfif',
    'images2/download (2).jfif',
    'images2/download.jfif',
    'images2/images (1).jfif',
    'images2/images (2).jfif',
    'images2/images (3).jfif',
    'images2/images (4).jfif',
    'images2/images (5).jfif',
    'images2/images (6).jfif',
    'images2/images.jfif',
    'images2/images.png'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++
}, 1000);

// const janiNa = document.getElementById('ami');
// console.log(janiNa)