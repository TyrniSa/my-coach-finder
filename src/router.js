import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/CoachesList";
import CoachRegisteration from "./pages/CoachRegisteration";
import ContactCoach from "./pages/ContactCoach";
import RequestReceived from "./pages/RequestsReceived";
import NotFound from "./pages/NotFound";
import CoachDetails from "./components/coaches/CoachDetails";

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
