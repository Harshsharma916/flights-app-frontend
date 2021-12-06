export function ReceieveMsgFromCSharp() {
  if (window.vuplex) {
    addMessageListener();
  } else {
    window.addEventListener("vuplexready", addMessageListener);
  }

  function addMessageListener() {
    window.vuplex.addEventListener("message", function (event) {
      let json = event.data;
      // > JSON received: { "type": "greeting", "message": "Hello from C#!" }
      console.log("JSON received: " + json);
      return json;
    });
  }
}
