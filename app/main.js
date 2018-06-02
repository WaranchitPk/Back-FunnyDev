import {routes as courseRoute} from './courses/routes';
import {routes as userRoute} from './users/routes';
import {routes as dashboardRoute} from './dashboard/routes';
import {routes as ortherRoute} from './orthers/routes';

const strRoutes = {
    course: '/api/courses',
    user: '/api/users',
    dashboard: '/api/dashboard',
    orther: '/api/orther'
};

export const MainRoutes = (app) => {
    courseRoute(strRoutes.course, app);
    userRoute(strRoutes.user,app);
    dashboardRoute(strRoutes.dashboard,app);
    ortherRoute(strRoutes.orther,app)
};