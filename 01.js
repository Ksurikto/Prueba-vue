const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola Mundo con Vue',
        frutas:[
            {nombre:'Pera', cantidad:2},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Platano', cantidad:10},
        ],
        nuevaFruta:'',
        total:0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas () {
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})