console.log("Started my vue");

const app = new Vue({
    el : "#app1", //here we define root element where we will hold our app
    data : {
        message : "RCS",
        warning : "leopard",
        created : "This was made on " + new Date().toLocaleString()
    }


});