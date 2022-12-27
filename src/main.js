import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Form, Field, Picker, Popup, Button, Divider, Tabbar, TabbarItem, Checkbox, CheckboxGroup} from 'vant'

Vue.use(Form);
Vue.use(Field);
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
