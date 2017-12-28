<template>
    <div class="countion">
        <div class="ssy_img_main">
            {{message}}
        </div>
    </div>
</template>

<script>
//import classIfication from "./components/classIfication"

export default{
    name:"xxfImageSelected",
    data(){
        return {
            message:"this is selected image",
        }
    },
    //components:{
        //classIfication
    //}
}
</script>

<style scoped>
@import "../../static/css/xxfImageMain.css"

</style>