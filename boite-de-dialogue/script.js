
let dialBox = document.querySelector("#dialog-box");
let dialMsg = dialBox.querySelector("#message");
let dialBtn = dialBox.querySelector("button");


let message = "Everybody loves the sunshine";

function call_dialBox(message) {
    dialBox.classList.add("visible");
    dialMsg.textContent = message;
};

function close_dialBox() {
        // dialMsg.textContent = "bye-bye";
        dialBox.classList.remove("visible");
};
dialBtn.onclick = close_dialBox;
call_dialBox(message);
