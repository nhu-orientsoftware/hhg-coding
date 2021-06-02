import {
  Switch, Route
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import sidebarRoutes from './sidebarRoutes';

function RouterApp() {
  return (
    <MainLayout>
      <Switch>
        {sidebarRoutes.map((route) => (
          <Route
            key={route.path}
            {...route}
          />
        ))}
      </Switch>
    </MainLayout>
  );
}

export default RouterApp;
