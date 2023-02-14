Vue.createApp({
    data(){
        return {
            pokemon:null
        
        }
    },
    methods:{
        async getPokemon(){
            //GET --- obtener informacion
            //POST --- para crear recursos
            //PUT --- modificar recursos
            //DELETE --- elimirar recursos
            const random = Math.floor(Math.random() * 1008);
           const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+random,{
                method:'GET'
            });

            const data = await response.json();
            this.pokemon= data
        }
    }
}).mount('#app')