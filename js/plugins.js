/* let bigImg = document.querySelector(".bigImg"),
  bigImage = document.getElementById("bigImage"),
  pics = document.querySelectorAll(".imgs"),
  x = document.querySelector(".fa-times"),
  next = document.getElementById("next"),
  previous = document.getElementById("previous");

pics.forEach((pic) => {
  pic.addEventListener("click", (e) => {
    imgnumber = e.target.dataset.imgnumber;
    bigImg.style.display = "grid";
    console.log(imgnumber);

    bigImage.src = `My Images/image (${imgnumber}).jpg`;
    next.onclick = function () {
      if (imgnumber < 221) {
        imgnumber++;
        bigImage.src = `My Images/image (${imgnumber}).jpg`;
        console.log(imgnumber);
      }
    };

    previous.onclick = function () {
      if (imgnumber > 1) {
        imgnumber -= 1;
        bigImage.src = `My Images/image (${imgnumber}).jpg`;
        console.log(imgnumber);
      }
    };
  });
  x.onclick = function () {
    bigImg.style.display = "none";
  };
});

let passField = document.querySelector("input");
let btn = document.querySelector("span i");

btn.onclick = function () {
  if (passField.type === "password") {
    passField.type = "text";
    btn.classList.add("hide-btn");
  } else {
    passField.type = "password";
    btn.classList.remove("hide-btn");
  }
};

let gallery = document.querySelector(".gallery"),
  body = document.getElementsByTagName("body"),
  loading = document.querySelector(".loading-bg"),
  loginForm = document.querySelector(".box");

loading.remove();
gallery.remove();

passField.addEventListener("keyup", () => {
  if (passField.value === "Your little") {
    loginForm.remove();
    document.body.appendChild(loading);
    document.body.appendChild(gallery);
    setTimeout(() => {
      loading.style.opacity = "0";
    }, 2000);
    setTimeout(() => {
      loading.remove();
    }, 2200);
  }
});
*/
