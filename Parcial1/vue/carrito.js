Vue.createApp({
    data(){
        return {
            carrito:[
            'Soda',
            'Tomates',
            'Sal'
            ],
            producto: ''

        }
    },
    methods:{
        agregar(){
            this.carrito.push(this.producto);
            this.producto='';
        }
    }
}).mount('#app')