Vue.createApp({
    data(){
        return {
            nombre:'',
            precio:'',
            cantidad:'',
            fecha:'',
            peso:'',
            codigo:'',

            productos:[


                /* {
                    nombre:"Piña",
                    precio: 20.50,
                    cantidad: 3
                },
                {
                    nombre:"Manzana",
                    precio: 3.50,
                    cantidad: 40
                }, */

            ]
        }
    },
    methods:{
        agregar(){
            const producto={
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad,
                fecha:this.fecha,
                peso:this.peso,
                codigo:this.codigo,
            }
            this.productos.push(producto);
        }
        
    }
}).mount('#app')