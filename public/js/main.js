// import will always go on top
import chatMsg from './components/ChatMessage.js';

    const socket = io();

    // utility function for socket
    function setUserID( { sID }) {


        // save our Unique ID generated by socket on the server side. this is how we track the individual socket connection to the chat service.
        vm.socketID = sID;


    }

    function showNewMessage({ message}) {
        vm.messages.push(message);
       console.log(message);
    }

    // making the vue instance
    const { createApp } = Vue

    const vm = createApp({
      data() {
        return {
          socketID : '',
            message : '',
            messages: [],

        }
      },

      methods: {
        // this is the method that will be called when the button is clicked      
        dispatchMessage() {
           socket.emit('chat_message', { content: this.message, name: this.nickname || "anonymous" 
        })

         this.message = "";
          } 
      },

      components: {
        newmsg: chatMsg
        // this is where we will define our components
      }
    }).mount('#app');


    // this is the function that will be called when the socket emits the 'connected' event
    socket.addEventListener('connected', setUserID);
    socket.addEventListener('new_message', showNewMessage);
