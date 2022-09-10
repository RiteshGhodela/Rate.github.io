// const starsE1 = document.querySelectorAll(".fa-star")
// const emojisE1 = document.querySelectorAll(".far")
// const colorsArray = [ "red","orange","lightblue","lightgreen","green",];
//  updateRating(0);

//  starE1.forEach((starE1, index)=>{
//     starE1.addEventListener("click",()=>{ 
//         updateRating(index)
//     });
//  });
//  function updateRating(index){
//     starE1.forEach((starE1,idx)=>{
//         if(idx<index+1){
//             starE1.classList.add("active");
//         }else{
//             starE1.classList.remove("active");
//         }
//     });
//     emojiE1.forEach((emojiE1)=>{
//         emojiE1.style.transform =`translatex(-${index * 50}px)`;
//         emojiE1.style.color = colorsarray[index]
//     });
//  }

const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "blue", "lightgreen", "green"];

updateRating(0);

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
