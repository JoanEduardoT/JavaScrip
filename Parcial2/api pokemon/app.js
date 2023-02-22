Vue.createApp({
    data() {
        return {
            cant:0,
            pokemones: [],
            loading:true
        }
    },
    mounted() {
        this.getPokemon
    }
    ,
    methods: {
        async getPokemon() {
            //GET --- obtener informacion
            //POST --- para crear recursos
            //PUT --- modificar recursos
            //DELETE --- elimirar recursos

            /*         const random = Math.floor(Math.random() * 1008);
                       const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+random,{
                            method:'GET'
                        }); */
            this.loading

            var i = 1
            while (i <= this.cant) {

                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                })
                    ;
                const pokemon = await response.json();
                this.pokemones.push(pokemon);
                i++
            }


        }
    }
}).mount('#app')