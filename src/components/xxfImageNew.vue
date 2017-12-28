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
    name:"xxfImageNew",
    data(){
        return {
            message:"this is new image",
        }
    }
}
</script>

<style scoped>
@import "../../static/css/xxfImageMain.css"
</style>