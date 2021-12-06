import {useSelector} from 'react-redux';


export function SendMessageToCSharp(type,message) {

    const state = useSelector((state => state));
    
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