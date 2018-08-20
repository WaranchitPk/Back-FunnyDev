import Model from "./model";
const CourseController = {
  findDashBoardCampus(req, res) {
    Model.findDashBoardCampus(req, res);
  },
  findCourseEachFaculty(req, res) {
    Model.findCourseEachFaculty(req, res);
  },
  findSumCourse(req, res) {
    const { year, id } = req.params;
    Model.findSumCourse(req, res, year, id);
  },
  findTrainCampus(req, res) {
    const { year, id } = req.params;

    Model.findTrainCampus(req,res,year,id)
  }
};
export default CourseController;