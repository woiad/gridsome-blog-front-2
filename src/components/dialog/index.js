import Vue from 'vue'
import Dialog from './index.vue'

const DialogConstructor = Vue.extend(Dialog)
let Instance

export const dialog = (options) =>{
  if(!Object.prototype.toString.call(options) === '[Object Object]') {
    console.error('Please enter an object as a parameter');
  }
  options = options ? options : {}
  Instance = new DialogConstructor({
    propsData: options
  })
  document.body.appendChild(Instance.$mount().$el)
}
