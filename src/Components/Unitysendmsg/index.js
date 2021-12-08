export function SendMessageToCSharp(type,message) {
    
    if (window.vuplex) {
      send(type,message);
    } else {
      window.addEventListener("vuplexready", send);
    }
    
    function send(type,message) {
      window.vuplex.postMessage({
        type: type,
        message: message,
      });
    }
  }