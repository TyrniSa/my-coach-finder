import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from "./pages/coaches/CoachDetails";
import CoachesList from "./pages/coaches/CoachesList";
import CoachRegisteration from "./pages/coaches/CoachRegisteration";
import ContactCoach from "./pages/requests/ContactCoach";
import RequestReceived from "./pages/requests/RequestsReceived";
import NotFound from "./pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegisteration },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
