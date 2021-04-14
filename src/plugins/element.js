import Vue from 'vue'
import { Button, Input, Form, FormItem, Message } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message//把弹框组件挂载到了原型对象上
