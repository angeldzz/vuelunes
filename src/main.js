import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

let app = createApp(App);
app.config.globalProperties.$filters = {
    collatz(numero){
        numero = parseInt(numero);
        
        let numeros = [numero];
        while(numero !== 1){
            if(numero % 2 === 0){
                numero = numero / 2;
                numeros.push(numero);
            }else{
                numero = numero * 3 + 1;
                numeros.push(numero);
            }
        }
        return numeros;
    }
}
app.use(router).mount('#app')
