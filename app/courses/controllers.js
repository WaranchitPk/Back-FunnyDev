import Model from './model';

const CourseController = {
    findDashBoardCampus(req,res){
        Model.findDashBoardCampus(req,res);
    },

};

export default CourseController;