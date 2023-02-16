export default {
    name: 'usertyping',


    template: `

    <div>
    <div class="typing">{{typist}}</div>
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

        methods: {
            handleUserTyping() {}
        },

      


    }

   