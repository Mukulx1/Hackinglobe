let i = 0;
let txt = 'Hii folks you are not probably safe here,     YOUR IP IS 😭😭😭           this is static website😭'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */
const element = document.getElementById("btn")
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    element.style.display = 'none'
  }
}

element.addEventListener("click", typeWriter);


