const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const title = document.getElementById("title");

let count = 0;

const updateCount = (newCount) => {
    count = newCount;
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
