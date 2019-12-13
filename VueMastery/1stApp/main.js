//new Vue is like a new instance, like heart
//that powers everything
//it is creatad by passing options object into it
//then Vue is hooked up to div instance in html

//double {{ }} are expressions into which we pass
//arguments of their value from Vue section
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks'
    }
})