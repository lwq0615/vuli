import imageLight from './src/main.vue'
import Vue from 'vue'

let imageLightConstructor = Vue.extend(imageLight)
let instance = new imageLightConstructor()

const ImageLight = function (url = "") {
    instance.$mount();
    instance.showImage(url)
    document.body.appendChild(instance.$el);
}

export default ImageLight