import HomePage from "./components/HomePage.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/LoginPage.vue"
import AddResto  from "./components/AddRestoPage.vue"
import RestoList from "./components/shared/RestoInfo.vue"
import { createRouter,createWebHistory } from "vue-router";

const routes=[
    {
        name: "HomePage",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/Sign-up"
    },
    {
        name: "Login",
        component: Login,
        path: "/Login-Page"
    },
    {
        name:"AddResto",
        component: AddResto,
        path: "/AddResto"
    },
    {
        name:"RestoList",
        component: RestoList,
        path: "/RestoList"

    }
];

const router = createRouter({
     history: createWebHistory(),
     routes,
});

export default router;
