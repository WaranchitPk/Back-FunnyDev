const CoursesModel = {
    findDashBoardCampus(req,res){
        req.getConnection((err,connection) =>{
            if (err) return err;
            connection.query(
                'SELECT\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/2\') AS Name2,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/2%\') AS Value2,\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/3\') AS Name3,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3%\') AS Value3,\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/4\') AS Name4,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/4%\') AS Value4,\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/5\') AS Name5,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/5%\') AS Value5,\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/6\') AS Name6,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6%\') AS Value6,\n' +
                '(SELECT name FROM mdl_course_categories WHERE  path = \'/7\') AS Name7,\n' +
                '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/7%\') AS Value7'
                ,(err,result) =>{
                if (err) return err;
                console.log(result)
                // for (let i = 2; i <= 7; i++) {
                //     const resultData = [{
                //         name: result[0].Name[i],
                //         value: result[0].Value[i]
                //     }];
                //     console.log(resultData)
                //
                // }
                const resultData = [
                    {name: result[0].Name2,value:result[0].Value2},
                    {name: result[0].Name3,value:result[0].Value3},
                    {name: result[0].Name4,value:result[0].Value4},
                    {name: result[0].Name5,value:result[0].Value5},
                    {name: result[0].Name6,value:result[0].Value6},
                    {name: result[0].Name7,value:result[0].Value7}
                ];
                    res.status(200).json({
                        resultData
                    })

            })
        });
    },


};
export default CoursesModel;