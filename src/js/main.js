let darkMode = localStorage.getItem("darkMode") === "true";

// Agar darkMode qiymati saqlanmagan bo'lsa, brauzer sozlamalarini tekshirish
if (localStorage.getItem("darkMode") === null) {
  darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  localStorage.setItem("darkMode", darkMode);
}

if (darkMode) {
  dark();
}


function light() {
  darkMode = false;
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", darkMode);
  document.querySelector("#root").innerHTML =
    ":root { \n      --purple: #7375ff;\n      --sky: #43ccfe;\n      --pink: #ff55bb;\n      --bg-blue: #6E80FF;\n      --bg-pink: #E2AFF9;\n      --bg: linear-gradient(45deg, var(--bg-blue), var(--bg-pink));\n      --bg-color: #d4dbe4;\n      --bg-color-transparent: #d4dbe422;\n      --bg-dark: #b5c4d4;\n      --bg-dark-transparent: #b5c4d422;\n      --bg-black: #fafafa;\n      --bg-light: #ccc8;\n      --bg-transparent: #fff5;\n      --text-color: #333;\n      --text-gray: #555;\n      --transition: 0.5s all ease;\n      --border: 1px solid var(--bg-color);\n      --border-hover: 1px solid var(--bg-black);\n      --l: 5px;\n      --r: 52%;\n   }";
}
function dark() {
  darkMode = true;
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", darkMode);
  document.querySelector("#root").innerHTML =
    ":root {\n    --purple: #3132a6;\n    --sky: #43ccfe88;\n    --pink: #8f336b;\n    --bg-blue: #404dc2;\n    --bg-pink: #7a498f;\n      \n    --bg: linear-gradient(45deg, var(--bg-blue), var(--bg-pink));\n    --bg-color: #15171a;\n    --bg-color-transparent: #15171a22;\n    --bg-dark: #212529;\n    --bg-dark-transparent: #21252922;\n    --bg-black: #161718;\n    --bg-light: #ddd5;\n    --bg-transparent: #0005;\n    --text-color: #ddd;\n    --text-gray: #aaa;\n    --transition: 0.5s all ease;\n    --border: 1px solid var(--bg-light);\n    --border-hover: 1px solid var(--text-color);\n    --r: 5px;\n    --l: 52%;  }";
}
