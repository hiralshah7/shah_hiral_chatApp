export default {
    name: 'usertyping',


    template: `

    <div>
    <div v-if="typing">{{typing}} is typing...</div>
    <!-- other chat components -->
  </div>
    `,

    //value in the message box for typing event and stop typing event

    

    

    data() {
        return {
            typing: '',
            message: '',
            typing:  false,

        }
    },

    watch: {
     new_message(value) {
        value ? socket.emit('typing', this.nickname) : socket.emit('stoptyping');
    },
  },
        methods: {
            handleUserTyping() {}
        },

      


    }

   