const CoursesModel = {
    findNameCampus(req,res){
        req.getConnection((err,connection) =>{
            if (err) return err;
            connection.query('SELECT id,name,path FROM mdl_course_categories WHERE parent = 0',(err,result) =>{
                if (err) return err;
                res.status(200).json({
                    result_name_campus: result
                })
            })
        });
    },
    findSumCoursesByCampus(req,res){
        req.getConnection((err,connection) =>{
            if (err) return err;
            connection.query(
                'SELECT\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/2%\') AS SUM_Course_CamPus_CR ,\n' +
                '(SELECT SUM(coursecount)  FROM mdl_course_categories WHERE path LIKE \'/3%\') AS SUM_Course_CamPus_Tak,\n' +
                '(SELECT SUM(coursecount)  FROM mdl_course_categories WHERE path LIKE \'/4%\') AS SUM_Course_CamPus_Nan,\n' +
                '(SELECT SUM(coursecount)  FROM mdl_course_categories WHERE path LIKE \'/5%\') AS SUM_Course_CamPus_PL,\n' +
                '(SELECT SUM(coursecount)  FROM mdl_course_categories WHERE path LIKE \'/6%\') AS SUM_Course_CamPus_CM,\n' +
                '(SELECT SUM(coursecount)  FROM mdl_course_categories WHERE path LIKE \'/7%\') AS SUM_Course_CamPus_LP'
                ,(err,result) =>{
                    if (err) return err;
                    res.status(200).json({
                        result_sum_courses_campus: result
                    })
                })
        })
    }
};
export default CoursesModel;