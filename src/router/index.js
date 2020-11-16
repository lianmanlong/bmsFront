import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      // {
      //   path: "/children",
      //   name: "children",
      //   component: Children
      // },

    ]

  },

  {
    path: "/login",
    name: "login",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/manager",
    name: "manager",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Manager.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/borrowerPage",
    name: "BorrowerPage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/user/BorrowerPage.vue")
  },
  {
    path: "/borrowerPage",
    name: "BorrowerPage",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/user/BorrowerPage.vue")
  },

  {
    path: "/personInformation",
    name: "personInformation",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/personInformation/PersonInformation")
  },
  {
    path: "/modifyInformation",
    name: "modifyInformation",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/personInformation/modifyInformation/ModifyInformation")
  },
  {
    path: "/editPersonInformation",
    name: "editPersonInformation",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/personInformation/modifyInformation/EditPersonInformation")
  },
  {
    path: "/borrowingHistory",
    name: "borrowingHistory",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/personInformation/borrowingHistory/BorrowingHistory")
  },
  {
    path: "/borrowingDetails",
    name: "borrowingDetails",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/personInformation/borrowingHistory/borrowingDetails/BorrowingDetails")
  },

  {
    path: "/showBookRock",
    name: "showBookRock",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/views/user/showBookRock/ShowBookRock")
  },
  {
    path: "/searchBook",
    name: "searchBook",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/views/user/searchBook/SearchBook")
  },

  {
    path: "/searchBook",
    name: "searchBook",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/views/user/searchBook/SearchBook")
  },
  {
    path: "/adminIndex",
    name: "adminIndex",
    component: () =>
        import(/* webpackChunkName: "about" */ "@/views/admin/adminIndex")
  },




];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
