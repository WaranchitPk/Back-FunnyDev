import Model from './model';

const CourseController = {
    findDashBoardCampus(req, res) {
        Model.findDashBoardCampus(req, res);
    },
    findCourseEachFaculty(req, res) {
        Model.findCourseEachFaculty(req, res)
    }
};

export default CourseController;