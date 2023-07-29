const containerE1 = document.querySelector(".career");
const VOwel = document.querySelector(".vowel");
const careers = [
  "Jamstack Developer",
  "Full Stack Developer",
  "IT Applications Developer",
  "Mern Stack Developer",
];
let characterIndex = 0;
let careerIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  careers[careerIndex].slice(0, 1) == "I"
    ? (VOwel.innerHTML = "an ")
    : (VOwel.innerHTML = "a ");

  containerE1.innerHTML = careers[careerIndex].slice(0, characterIndex);

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
}
