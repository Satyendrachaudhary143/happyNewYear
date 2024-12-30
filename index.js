let audioPlay = document.getElementById("audio");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let clock = document.querySelector(".clock");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let welcome = document.querySelector(".welcome");
let welcome2 = document.querySelector(".welcome2");
let nameW = document.querySelector(".name");

clock.addEventListener("click", () => {
    audioPlay.play();
    clock.style.display = "none";
    left.classList.add("leftA");
    right.classList.add("rightA");
    left.classList.remove("leftt");
    right.classList.remove("rightt");
    setTimeout(() => { front.style.display = "none"; back.classList.remove("back") }, 4000)

})

// name find
let send = document.querySelector(".send");
let userNameFind = document.querySelector(".nameU");
let userName;
let nameU = document.querySelector(".inputUser");
let mwish = document.querySelector(".mwish");
nameU.addEventListener("input", (e) => {
    userName = e.target.value;

})

send.addEventListener("click", () => {
    if (userName == "") {
        alert("Please Enter Your Name");
    }
    else if (userName == undefined) {
        alert("Please Enter Your Name");
    }
    else {
        userNameFind.innerHTML = userName;
        mwish.innerHTML = `${userName} की तरफ से आपको और आपके परिवार को नववर्ष
                        2025 की हार्दिक शुभकामनायें !!`
        console.log(userName);

    }
})  