Vue.createApp({
    data(){
        return {
            producto:0

        }
    },
    computed:{
        SeleccionProducto(){
            if(this.producto==1){
                return "https://mercadolavega.cl/wp-content/uploads/2021/04/Manzana-Royal-mami-teti-.jpeg";
            } else if (this.producto==2){
                return "https://static.wixstatic.com/media/a7dee3_4c558736f7b243329c59427d855d278c~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg";
            } else if (this.producto==3){
                return "https://th.bing.com/th/id/R.ed967c88e4e15eaf36a9343c86fbd67e?rik=X2tlADYzM9PKKg&pid=ImgRaw&r=0";
            } else if (this.producto==4){
                return "https://th.bing.com/th/id/R.862e9a11cd9a01a7323c318aaee326a6?rik=JVrLhYo1yJha3A&pid=ImgRaw&r=0";
            } else if (this.producto==5){
                return "https://th.bing.com/th/id/R.81101945610aa64a60514a6a101fbb48?rik=Glax5btSoGAHMw&pid=ImgRaw&r=0";
            }
        }
    }
}).mount("#app");