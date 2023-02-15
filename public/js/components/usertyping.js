export default {
    name: 'usertyping',


    template: `

    <div>
    <div>{{typist}}</div>
    <!-- other chat components -->
  </div>
    `,

    //value in the message box for typing event and stop typing event

    

    

    data() {
        return {
            typing: '',
            message: '',
            typing:  false,
            typist: '',

        }
    },

    watch: {
     new_message(value) {
        value ? socket.emit('typist', this.nickname) : socket.emit('stoptyping');
    },
  },
        methods: {
            handleUserTyping() {}
        },

      


    }

   