import {
  findDashBoardCampus_Str,
  findCourseEachFaculty_Str,
  findSumCourse
} from "./queryStr";
import {
  changeShowTrain,
} from "./queryString/findTrainYearEachCampus";
import {
  faculty,
  campus
} from "./modelQuery_Set";

const CoursesModel = {
  findDashBoardCampus(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findDashBoardCampus_Str, (err, result) => {
        if (err) return err;
        const resultData = campus(result);
        res.status(200).json({
          resultData
        });
      });
    });
  },
  findCourseEachFaculty(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findCourseEachFaculty_Str, (err, result) => {
        if (err) return err;
        const resultFaculty = faculty(result);
        res.status(200).json({
          resultFaculty
        });
      });
    });
  },
  findSumCourse(req, res, year) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findSumCourse(year), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  findTrainCampus(req, res, year,id) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(changeShowTrain(year,id), (err, result) => {
        if (err) return err;
        console.log(result)
        res.status(200).json({
          result
        });
      });
    });
  }
};
export default CoursesModel;