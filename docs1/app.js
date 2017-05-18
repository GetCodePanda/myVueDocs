// vue intro example from the docs ...
const app = new Vue({
el:'#app',
data:{
message:"HA Ha"
}

});

const app2 = new Vue({
    el:'#app-2',
    data:{
        message2: `the message 2 is todays date is ${new Date()}`
    }

});


const app3 = new Vue({
    el:'#app-3',
    data:{
        isVisiable:false
    }

});


const app4 = new Vue({
    el:'#app-4',
    data:{
        todos: [
            'go to home',
            'get food',
            'eat will'
        ]
    }
});


const app5  = new Vue({
    el:'#app-5',
    data:{
        message : "1234"
    },
    methods:{
        reverseMessage(){
            this.message = this.message.split('')
                                       .reverse()
                                       .join('');
        }
    }
});


const app6 = new Vue({
    el:'#app-6',
    data:{
        message:'message'
    }
});


Vue.component('haha',{
    props:['context'],
    template:`<li :id="context.id">{{context.text}}</li>`
}); // todo-item component ..

// app7 example
new Vue({
    el:'#app7',
    data:{
        content:[
            {id:0, text:"haha component one content"},
            {id:1, text:"haha component two content"}
        ]
    }
});

