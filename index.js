const utc_time = document.getElementById("time");
const p = document.querySelector(".about-me");
const p_text = `I have a passion for creating beautiful and functional user interfaces
          and translating them into codes. I am proficient in HTML, CSS, and
          JavaScript. I am also familiar with React, Node.js, and Express.js. I
          write on frontend tools, new technologies, programming with
          JavaScript, and how to get started in frontend development`;
// //Get UTC time
// function time() {
//   const d = new Date();
//   let h = d.getUTCHours();
//   let m = d.getUTCMinutes();
//   let s = d.getUTCSeconds();

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   utc_time.innerHTML = `${h}:${m}:${s}`;
//   setTimeout(time, 1000);
// }
// time();

// Text reveal function
function TypewriterEffect(element, text, i = 0) {
  // prevent double effect
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];

  //   base condition
  if (i === text.length - 1) {
    return;
  }

  //   Set timeout
  //   recursive call
  setTimeout(() => TypewriterEffect(element, text, i + 1), 50);
}

// TypewriterEffect(p, p_text);

// DARK MODE
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("active");
  console.log("clicked")
});
