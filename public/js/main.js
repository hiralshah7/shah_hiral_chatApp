// import will always go on top
import chatMsg from './components/ChatMessage.js';
import User from './components/User.js';
import usertyping from './components/usertyping.js';

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

    // function showCurrentlyTyping({ currentlytyping }) {
    //     vm.typing = push(currentlytyping);
    // }
    function handleUserTyping(user) {
      console.log('user is typing a message');
    }

    // making the vue instance
    const { createApp } = Vue

    const vm = createApp({
      data() {
        return {
          socketID : '',
            message : '',
            messages: [],
            User: [],

        }
      },

      created() {
        socket.on('typing', (nickname) => {
        
            this.typing = nickname + ' is typing...';
        });
      },
      
      
      methods: {
        // this is the method that will be called when the button is clicked      
        dispatchMessage() {
           socket.emit('chat_message', { content: this.message, name: this.nickname || "anonymous",
           id: this.socketID
        })

         this.message = "";
          },

          catchTextFocus() {
            //emit a typing event to the server
            console.log('focused');
            socket.emit('typing', { name: this.nickname || "anonymous" });
            // to show when the user starts typing
          },

         
      },

      components: {
        newmsg: chatMsg,
        User: User,
        usertyping: usertyping
        // this is where we will define our components
      }


    }).mount('#app');



    // this is the function that will be called when the socket emits the 'connected' event
    socket.addEventListener('connected', setUserID);
    socket.addEventListener('new_message', showNewMessage);
    // catch the typing event
    socket.addEventListener('typing', handleUserTyping);
    // socket.addEventListener('typing', showCurrentlyTyping);
    
