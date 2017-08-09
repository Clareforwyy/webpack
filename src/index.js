var Vue = require('vue')
var helloVue = require('./views/demo.vue')
new Vue({
	el: "body",
	components: {
		hello: helloVue
	}
})