
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
   
    <!-- creating a button to sign out  and  page to reload -->
    <div class="signout-button" v-if="joined">
    <button class="signout-button" v-on:click="signout">Sign Out</button>
    </div>

    <!-- making sound once the message is recieved recieved from the server -->
    <audio id="chatAudio">
    <source src="audio/chat.mp3" type="audio/mpeg">
    </audio>

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

        signout() {

            this.joined = false;
            location.reload();
            },

        // making sound once the message is sent and recieved
        playAudio() {
         // play only when message is reieved 
            let audio = document.getElementById('chatAudio');
            audio.play();
            
        }


}
}