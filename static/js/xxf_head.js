export default{
    name:"xxfHead",
    data (){
        return{
           //mess:"erzi",
           show:false, 
        }   
    },
    methods:{
        enter:function(){
            return this.show=true;
        },
        leave:function(){
            return this.show=false;
        }
    }
}