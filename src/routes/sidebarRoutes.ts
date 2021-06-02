import Dashboard from '../pages/Dashboard';
import Managerment from '../pages/Managerment';

interface ISidebarRoutes {
  path: string;
  exact: boolean;
  component: any;
}
const sidebarRoutes: ISidebarRoutes[] = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: '/managerment',
    exact: true,
    component: Managerment
  }
];

export default sidebarRoutes;