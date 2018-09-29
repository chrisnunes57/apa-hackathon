window.onload = function(){
    let chatWindow = document.createElement("iframe");
    let container = document.createElement("div");
    let span = document.createElement("span");
    span.id="chat-apa-hack-toggle";
    span.innerHTML = "+";
    container.className = "chat-apa-hack-hidden";
    span.onclick = function(){
        if(container.classList.contains("chat-apa-hack-hidden")){
            container.classList.remove("chat-apa-hack-hidden");
            span.classList.remove("chat-apa-hack-hidden");
            span.innerHTML = "-";
        }else{
            span.classList.add("chat-apa-hack-hidden");
            container.classList.add("chat-apa-hack-hidden");
            span.innerHTML = "+";
        }
    }
    container.id = "chat-apa-hack-container";
    chatWindow.src = 'https://webchat.botframework.com/embed/Parvo-Bot-2?s=3DjFldoc7pE.cwA.CLA.m1R0F63gvN2KR0EXoWtBih_Mat1P2d0n3MEuXmICBfY';
    chatWindow.id = "chat-apa-hack";
    container.appendChild(chatWindow);
    container.appendChild(span);
    document.body.appendChild(container);
}