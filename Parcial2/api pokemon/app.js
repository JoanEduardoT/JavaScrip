Vue.createApp({
    data() {
        return {
            pokemones: []

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
            var i = 1
            while (i <= 200) {

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