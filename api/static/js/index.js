window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// Close the navigation menu if a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-items a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageBox = document.querySelector(".image-box");

  // Function to fetch a random nature image from Unsplash
  function getRandomNatureImage() {
    const randomParam = Math.random(1); 
    const imageUrl = `https://source.unsplash.com/featured/?nature&${randomParam}`;

    // Create an image element and append it to the image box
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageBox.appendChild(imageElement);
  }

  getRandomNatureImage();
});