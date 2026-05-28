const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const title = document.getElementById("title");

let count = 0;

const updateCount = (newCount) => {
    count = newCount;
    title.classList.remove("zero","positive","negative");
    
    if (count === 0 ) {
        title.classList.add("zero");
    } else if (count > 0){
        title.classList.add("positive");
    } else if (count < 0){
        title.classList.add("negative");
    }
    title.textContent = count;
}

plusButton.addEventListener("click", () => {
    console.log("ボタンが押されました");
    updateCount(count + 1);
});

minusButton.addEventListener("click", () => {
    console.log("マイナスします");
    updateCount(count - 1);
})

resetButton.addEventListener("click", () => {
    console.log("リセットします")
    updateCount(0);
})
