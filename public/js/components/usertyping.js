export default {
    name: 'usertyping',


    template: `

    <div>
    <div v-if="typing">{{typing}} is typing...</div>
    <!-- other chat components -->
  </div>
    `,

    

    data() {
        return {
            typing: '',
            message: ''
        }
    },
        methods: {
            handleUserTyping() {
              
            }
          }
        };