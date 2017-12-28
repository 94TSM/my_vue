import xxfImageSelected from "@/components/xxfImageSelected"
import xxfImageNew from "@/components/xxfImageNew"
import xxfAuthor from "@/components/xxfAuthor"
export default{
    name:"images",
    data(){
        return {
            isActive:true,
            isActive1:false,
            isActive2:false,
        }
    },
    methods:{
        toSelected:function(){
            this.$router.push({
                path:"/",
                name:"xxfImageSelected",
                component:xxfImageSelected
            });
            this.isActive=true;
            this.isActive1=false;
            this.isActive2=false;
            
        },
        toNew:function(){
            this.$router.push({
                path:"/new",
                name:"xxfImageNew",
                component:xxfImageNew
            });
            this.isActive=false;
            this.isActive1=true;
            this.isActive2=false;
        },
        toAuthor:function(){
            this.$router.push({
                path:"/author",
                name:"xxfAuthor",
                component:xxfAuthor
            });
            this.isActive=false;
            this.isActive1=false;
            this.isActive2=true;
        }
    }
}