import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

import CoachDetails from "./pages/coaches/CoachDetails";
import CoachRegistration from "./pages/coaches/CoachRegisteration";
import ContactCoach from "./pages/requests/ContactCoach";
import RequestsReceived from "./pages/requests/RequestsReceived";
import UserAuth from "./pages/auth/UserAuth";
import NotFound from "./pages/NotFound";
import CoachesList from "./pages/coaches/CoachesList";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true, //get id from route
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
