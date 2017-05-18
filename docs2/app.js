// vuejs docs for api ..

var Profile = Vue.extend({
    template:`<p>
                    <strong>FirstName</strong> : {{firstName}}                     <strong>LastName</strong>  : {{lastName}}
                    <strong>NiceName</strong>  : {{nickName}}
             </p>`,
    data : function(){
        var profile = {
            firstName:"Codepanda",
            lastName:"Surendar",
            nickName:"Sure"
        };

        return profile;
    }
});


// creating the new instances for the Profile Constructor...
new Profile().$mount('#mount-point');

// redirect docs flag ...

// ************************************************
// api redirect to the component docs...          *
// i am going to learn the component api ...      *
// and then come to here ....                     *
//*************************************************
//
//
//
//








