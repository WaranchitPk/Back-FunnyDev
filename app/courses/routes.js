import Controller from './controllers';

export const routes = (str,app) =>{
    app.get(`${str}/`,Controller.find);
    app.get(`${str}/:id`,Controller.findById);
    app.post(`${str}`);
};