import Vue from "vue"
import Router from "vue-router"
import xxfImage from "@/components/xxfImage"
import xxfVideo from "@/components/xxfVideo"
import xxfCommunity from "@/components/xxfCommunity"
import xxfImageSelected from "@/components/xxfImageSelected"
import xxfImageNew from "@/components/xxfImageNew"
import xxfAuthor from "@/components/xxfAuthor"

Vue.use(Router)

export default new Router({
     //mode: 'history',
    routes:[
        {
            path:"/",
            name:"xxfImage",
            component:xxfImage,
            children:[
                {
                    path:"/",
                    name:"xxfImageSelected",
                    component:xxfImageSelected
                },
                {
                    path:"/new",
                    name:"xxfImageNew",
                    component:xxfImageNew
                },
                {
                    path:"/author",
                    name:"xxfAuthor",
                    component:xxfAuthor
                },
            ]
        },
         {
            path:"/ssyVideo",
            name:"xxfVideo",
            component:xxfVideo,
        },
         {
            path:"/ssyCommunity",
            name:"xxfCommunity",
            component:xxfCommunity,
        },
    ]
})