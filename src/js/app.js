var app = new Vue({
	el: '#app',
	data: {
		message: 'Helo Vue.js!'
	}
});

//列表
Vue.component('todo-item', {
	props: ["todo"],
	template: '<li>{{ todo.text }}</li>'
})
var app1 = new Vue({
	el: "#app1",
	data: {
		dlist: [{
			"id": 1,
			"text": "VUE介绍"
		}, {
			"id": 2,
			"text": "基本语法"
		}, {
			"id": 3,
			"text": "实例"
		}]
	}
});

//数据绑定
var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'ads'
	}
})

//点击显示隐藏
var date = new Date();
// date.getTime = function() {
// 	alert("xss")
// }
var app3 = new Vue({
	el: '#app3',
	data: {
		seen: true,
		message: '点击显示隐藏' + date.getTime()
	},
	methods: {
		bclick: function() {
			this.seen ? this.seen = false : this.seen = true;
			//date.aa();
		}
	}
})