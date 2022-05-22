const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];

// const img = document.createElement("img");
// img.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

body.style.backgroundImage = `url('img/login_img.jpeg')`;

// document.body.style.backgroundSize = "100%";
// document.body.style.backgroundRepeat = "no-repeat";