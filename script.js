const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-count");
let remainingCount = document.getElementById("remaining-count");
let userChar =0;
 // to update counter
const updateCounter = () => {
  userChar = charval.value.length;
  totalCount.innerText = userChar;
  remainingCount.innerText = 150- userChar;

};
charval.addEventListener("keyup", ()=> updateCounter());
// to copy textarea
const copyText = () =>{
  charval.select();
  charval.setSelectionRange(0,150);
  navigator.clipboard.writeText(charval.value);
}
