
export default {
    name: 'User',
    props: ['user'],

    template: `

   <div v-if="!joined" class="parent-container">
   <div class="name-container">
   <input type="text" class="user-name" v-model="currentUser">
   <button class="join-button" v-on:click="join">Join</button>
   <!-- rendering user name once they join the chat -->
  


   </div>
   </div>
   <!-- rendering welcome note once they join the chat -->
    <div class="welcome-note" v-if="joined">
    <h2>Welcome to the chat room, {{ currentUser }}!</h2>
    </div>
    <div v-if="joined">
    <div v-if="currentUser" class="user-avatar"><div>
    <img :src="'images/' + currentUser + '.png'" alt="user avatar">
    </div>
</div>
</div>
    `,

    data() {
        return {
          joined: false,
          currentUser: '',


          // rendering the user name once they join the chat

         


        }
    },

    methods: {
        join() {
            this.joined = true;
            console.log(this.currentUser);
            // rendering the user name once they join the chat
            this.$emit('joined', this.currentUser);
        },
}
}