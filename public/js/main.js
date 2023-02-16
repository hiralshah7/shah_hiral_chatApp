// import will always go on top
import chatMsg from './components/ChatMessage.js';
import User from './components/User.js';
import usertyping from './components/usertyping.js';

    const socket = io();

    // utility function for socket
    function setUserID( { sID }) {
 
        vm.socketID = sID;

    }

    function showNewMessage({ message}) {
        vm.messages.push(message);
       console.log(message);
    };

    function handleUserTyping(user) {
      console.log('user is typing a message');
      vm.typing = user;
      

      // pull the id out of user and check it against vm.socketID
      // if they DON'T match, then:
      // 1. set the typing data to true
      // 2. show who is the typist from the user argument
    

       if (user.id != vm.socketID) {
        vm.typist = user.name + ' is typing...';
      } 
      else {
        vm.typist = ' ';

      }

      setTimeout (() => {
        vm.typist = ' ';
      }
      , 2000);

      //adding a timeout to the typing event so that it will stop after 2 seconds but should 

    };

    //play audio once the messsage is reiceved
    function playAudio() {
      var audio = new Audio('./audio/chat.mp3');
      // audio.play();

      //if message is recieved then the audio will play
       // using if and else statement

      if (vm.messages) {
        console.log('message recieved');
        audio.play();
      }
      else {
        audio.pause();
      };

    };

    const { createApp } = Vue

    const vm = createApp({
      data() {
        return {
          socketID : '',
            message : '',
            messages: [],
            User: [],
            typing: '',
            nickname: '',
            typist: '',
        }
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
            socket.emit('typing', { 
              name: this.nickname || "anonymous",          
              id: this.socketID
          },

          );

          },
         
      },

      components: {
        newmsg: chatMsg,
        User: User,
        usertyping: usertyping
 
      }


    }).mount('#app');

    socket.addEventListener('connected', setUserID);
    socket.addEventListener('new_message', showNewMessage);
    socket.addEventListener('typing', handleUserTyping);
    socket.addEventListener('new_message', playAudio);

  
