chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Received message from background.js: ", message);
    if (message.command === "changeColor") {
    //   document.body.style.backgroundColor = message.color;
        document.getElementById("list").text = "Clicked";
    }
  });
  
