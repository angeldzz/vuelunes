<template>
  <div>
    <label>Tabla Normal</label>
    <input type="number" v-model="normal">
    <button @click="generarTabla()">Generar tabla</button>
    <table>
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody v-html="tablaGenerada"></tbody>
    </table>
    <hr>
    <label>Tabla Directivas</label>
    <input type="number" v-model="directivas">
    <table>
        <thead>
            <tr>
                <th>Operacion</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
                <td>{{ directivas }} x {{ i }}</td>
                <td>{{ directivas * i }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:"TablaMultiplicar",
    data(){
        return{
            directivas: undefined,
            normal: undefined,
            tablaGenerada: ''
        }
    },
    methods:{
        generarTabla(){
            let resultado = []
            for(let i = 1; i <= 10; i++){
                resultado.push(`<tr><td>${this.normal} x ${i}</td><td>${this.normal * i}</td></tr>`);
            }
            this.tablaGenerada = resultado.join('');
        }
    }
}
</script>
