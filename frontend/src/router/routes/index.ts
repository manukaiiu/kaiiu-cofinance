
import { RouteComponent, RouteRecordRaw } from "vue-router";
import { ERoutes } from "@/enums/route.enum";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: ERoutes.TEST,
  },
  {
    component: (): RouteComponent => import(`@/pages/TestPage.vue`),
    name: ERoutes.TEST,
    path: ERoutes.TEST,
    meta: {
      headerTitle: 'Test',
    }
  },
];

export default routes;
