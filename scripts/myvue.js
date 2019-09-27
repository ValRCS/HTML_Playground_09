console.log("Started my vue");

const app = new Vue({
    el : "#app1", //here we define root element where we will hold our app
    data : {
        message : "RCS",
        warning : "leopard",
        created : "This was made on " + new Date().toLocaleString(),
        seen : true,
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ]
    },
    methods : {
        reverseMessage : function() {
            //another bit of magic this.message is mapped to this.data.message
            console.log("Reversing Message");
            this.message = this.message.split('').reverse().join('');
        }
    }


});