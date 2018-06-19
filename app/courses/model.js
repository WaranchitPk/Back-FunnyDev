import {findDashBoardCampus_Str, findCourseEachFaculty_Str} from './queryStr';
import {faculty, campus} from './modelQuery_Set';

const CoursesModel = {
    findDashBoardCampus(req, res) {
        req.getConnection((err, connection) => {
            if (err) return err;
            connection.query(findDashBoardCampus_Str, (err, result) => {
                if (err) return err;
                const resultData = campus(result);
                res.status(200).json({
                    resultData
                })
            })
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
                })
            })
        })
    },
};
export default CoursesModel;