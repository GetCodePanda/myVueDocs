// component vuejs docs examples ...

// global Registration is already we seen in
// docs1 , so we on to next one called


//Local Registration:

//example 1 :

var header = {
    template:'<div>Local Reg Component</div>'
}

// header component ...
new Vue({
    el:'#app',
    components:{
        'my-header': header
    }
});


// data Must Be a Function ...


// example2  counter

// share data variable ...
/*var data = {*/
/*counter: 0*/
/*};*/

Vue.component('counter' ,{
    template:`
        <button @click="counter += 1">{{counter}}</button>
    `,
    data:function(){
        var data = {
            counter: 0
        };
        return data;
    }
});

new Vue({
    el:'#app1',
})

//example 3 props ....

Vue.component('child',{
    props:['message'],
    template:`<h1>{{message}}</h1>`
});


new Vue({
    el:"#app3",
});


// Dynamic Props ...

Vue.component('dchild' , {
    props:['dMsgC'],
    template:`
        <div>
           {{dMsgC}}
        </div>
    `
});


new Vue({
    el:'#app4',
    data:{
        dMsg:'hi'
    }
});



// one way of data flow ..
// example 4

// test for git


