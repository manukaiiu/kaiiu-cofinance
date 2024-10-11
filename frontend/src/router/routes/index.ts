
import { RouteComponent, RouteRecordRaw } from "vue-router";
import { ERoutes } from "@/enums/route.enum";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: ERoutes.Test,
  },
  {
    component: (): RouteComponent => import(`@/pages/TestPage.vue`),
    name: ERoutes.Test,
    path: ERoutes.Test,
    meta: {
      headerTitle: 'Test',
    }
  },
];

export default routes;
