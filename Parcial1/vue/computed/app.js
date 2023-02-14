Vue.createApp({
    data(){
        return {
            edad:0

        }
    },
    computed:{
        CalcularEdad(){
            if(this.edad>18){
                return 'Eres mayor de edad';
            }else{
                return 'Eres menor de edad'
            }
        }
    }

}).mount('#app');