const list = document.getElementById("messageList");
const button = document.getElementById("addButton")
const input = document.getElementById("messageInput");


button.addEventListener("click", ()=> {
    console.log("Clickでボタンが押されました");
    buttonActivate()
});

input.addEventListener("keydown", (event)=> {
    if(event.key === "Enter"){
        console.log("Enterでボタンが押されました");
        buttonActivate()
    };
});

const buttonActivate = () =>{
    const newItem = document.createElement("li");
    const value = input.value;
    if(value === ""){
        console.log("空欄です");
        return;
    }
        
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-";

    deleteButton.addEventListener("click",() => {
        console.log("削除ボタンが押されました");
        removeItem(newItem)
    });
    
    newItem.textContent = value;
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    input.value = ""
    
};

const removeItem = (item) => {
    item.remove()
}