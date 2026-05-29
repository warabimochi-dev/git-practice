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
    }else{
        newItem.textContent = value;
        list.appendChild(newItem);
        input.value = ""
    }
};
