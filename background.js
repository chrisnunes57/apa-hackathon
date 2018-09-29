window.onload = function(){
    let chatWindow = document.createElement("iframe");
    let container = document.createElement("div");
    let span = document.createElement("span");
    span.id="chat-apa-hack-toggle";
    span.innerHTML = "+";
    container.className = "chat-apa-hack-hidden";
    container.id = "chat-apa-hack-container";
    chatWindow.src = 'https://webchat.botframework.com/embed/Parvo-Bot-2?s=3DjFldoc7pE.cwA.CLA.m1R0F63gvN2KR0EXoWtBih_Mat1P2d0n3MEuXmICBfY';
    chatWindow.id = "chat-apa-hack";
    let ringContainer = document.createElement("div");
    ringContainer.className = "ring-container";
    let ringring = document.createElement("div");
    ringring.className = "ringring";
    let circle = document.createElement("div");
    circle.className = "circle";
    span.onclick = function(){
        if(container.classList.contains("chat-apa-hack-hidden")){
            container.classList.remove("chat-apa-hack-hidden");
            span.classList.remove("chat-apa-hack-hidden");
            span.innerHTML = "-";
            ringContainer.classList.add("chat-apa-hack-hidden");
        }else{
            span.classList.add("chat-apa-hack-hidden");
            container.classList.add("chat-apa-hack-hidden");
            span.innerHTML = "+";
        }
    }
    ringContainer.appendChild(ringring);
    ringContainer.appendChild(circle);
    container.appendChild(chatWindow);
    container.appendChild(span);
    container.appendChild(ringContainer);
    document.body.appendChild(container);
}