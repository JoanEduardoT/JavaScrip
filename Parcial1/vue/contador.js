Vue.createApp({
    data(){
        return {
            contador: 20
        }
    },
    methods: {
        incrementar(){
            this.contador++;
        },
        decrementar(){
            if (this.contador >0){
                this.contador--;
            }
        },
        limpiar(){
            this.contador= 0
        }
            
        }
    }
).mount('#app');
