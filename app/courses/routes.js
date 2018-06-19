import Controller from './controllers';

export const routes = (str,app) =>{
    app.get(`${str}/`,Controller.findNameCampus);
    app.get(`${str}/sum_courses`,Controller.findSumCoursesByCampus);
};