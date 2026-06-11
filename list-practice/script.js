const list = document.getElementById("messageList");
const button = document.getElementById("addButton")
const input = document.getElementById("messageInput");

let messages = [];

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
       const value = input.value;
    if(value === ""){
        console.log("空欄です");
        return;
    }
    input.value = ""
    messages.push(value);
    console.log(messages);
    saveMessages()
    
    addList(value)

};

const addList = (value) => {
    const newItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "-";

    deleteButton.addEventListener("click",() => {
        console.log("削除ボタンが押されました");
        removeItem(newItem)
        removeMessages(value)
    });

    newItem.textContent = value;
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

};

const removeItem = (item) => {
    item.remove()
};

const saveMessages  = () => {
    localStorage.setItem("messages",JSON.stringify(messages));
};

const removeMessages  = (value) => {
    messages = messages.filter((item) => item !== value);
    console.log(messages);
    saveMessages()
};

const loadMessages = () => {
    const saved = localStorage.getItem("messages");
    if(saved === null) return;

    const parsedMessages = JSON.parse(saved);
    
    parsedMessages.forEach(element => {
        addList(element);
    });
    
}

loadMessages()
