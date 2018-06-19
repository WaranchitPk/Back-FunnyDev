import Model from './model';

const CourseController = {
    findNameCampus(req,res){
        Model.findNameCampus(req,res);
    },
    findSumCoursesByCampus(req,res){
        Model.findSumCoursesByCampus(req,res)
    }
};

export default CourseController;