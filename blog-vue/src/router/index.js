import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import singleBlog from "../views/single_blog.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
        },
        {
            path: "/blog/:id",
            name: "singleBlog",
            component: singleBlog,
        },
    ]
})

export default router;