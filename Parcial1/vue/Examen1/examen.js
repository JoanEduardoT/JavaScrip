const app =Vue.createApp({
    data(){
        return {
            nombreCurso:'',
            descripcion:'',
            imagen:'',
            precio:0,
            cantcomprados:0,
            total1:0,
            total2:0,

            cursos:[]
        }
    },
    methods:{
       /*  async obtener(){
            const data= await fetch('https://amiiboapi.com/api/amiibo/',{
                method:'GET'
            });
            const amiibos= await data.json();
            this.amiibos= amiibos.amiibo;

            console.log(this.amiibos)
        } */
        agregar(){
            const curso={
                nombreCurso:this.nombreCurso,
                descripcion:this.descripcion,
                imagen:this.imagen,
                precio:this.precio,
                cantcomprados:this.cantcomprados
            }
            
            this.cursos.push(curso);
            this.total1= this.precio * this.cantcomprados
            this.total2= this.total1 + this.total2
            
        }
    }
})