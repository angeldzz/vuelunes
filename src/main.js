import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

let app = createApp(App);
app.config.globalProperties.$filters = {
    collatz(numero){
        numero = parseInt(numero);
        
        let numeros = [];
        while(numero !== 1){
            if(numero % 2 === 0){
                numeros.push(`<h3 style="color:green;">${numero}</h3>`);
                numero = numero / 2;
            }else{
                numeros.push(`<h3 style="color:red;">${numero}</h3>`);
                numero = numero * 3 + 1;
            }
        }
            numeros.push(`<h3 style="color:red;">1</h3>`);
        return numeros.join("");
    }
}
app.use(router).mount('#app')
