import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

function checkText() {
    const find = document.querySelector('h1.hello');
    if (find.innerText === 'HelloWorld') {
        return true;
    }
    return false;
}
console.log(checkText());

function checkCounter() {
    const pastCount = Number(document.querySelector('h1.counter').innerText);
    document.querySelector('button.add').click();
    console.log(pastCount);
    console.log(Number(document.querySelector('h1.counter').innerText));
    if (pastCount + 1 === Number(document.querySelector('h1.counter').innerText)) {
        return true;
    }
    return false;
}
console.log(checkCounter())