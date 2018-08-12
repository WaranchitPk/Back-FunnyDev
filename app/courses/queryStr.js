export const findDashBoardCampus_Str = 'SELECT\n' +
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

export const findCourseEachFaculty_Str = 'SELECT\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/2/25\') AS Name_Business_CR,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/2/25%\') AS SUM_Business_CR,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/2/27\') AS Name_Engineer_CR,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/2/27%\') AS SUM_Engineer_CR,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/2/29\') AS Name_General_CR,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/2/29%\') AS SUM_General_CR,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/3/21\') AS Name_Business_Tak,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3/21%\') AS SUM_Business_Tak,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/3/22\') AS Name_Scient_Tak,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3/22%\') AS SUM_Scient_Tak,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/3/23\') AS Name_Engineer_Tak,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3/23%\') AS SUM_Engineer_Tak,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/3/24\') AS Name_Art_Tak,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3/24%\') AS SUM_Art_Tak,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/3/30\') AS Name_General_Tak,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/3/30%\') AS SUM_General_Tak,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/4/18\') AS Name_Business_Nan,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/4/18%\') AS SUM_Business_Nan,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/4/19\') AS Name_Scient_Nan,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/4/19%\') AS SUM_Scient_Nan,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/4/20\') AS Name_Engineer_Nan,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/4/20%\') AS SUM_Engineer_Nan,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/5/15\') AS Name_Business_PL,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/5/15%\') AS SUM_Business_PL,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/5/16\') AS Name_Scient_PL,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/5/16%\') AS SUM_Scient_PL,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/5/17\') AS Name_Engineer_PL,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/5/17%\') AS SUM_Engineer_PL,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/6/11\') AS Name_Business_CM,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6/11%\') AS SUM_Business_CM,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/6/12\') AS Name_Engineer_CM,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6/12%\') AS SUM_Engineer_CM,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/6/13\') AS Name_Art_CM,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6/13%\') AS SUM_Art_CM,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/6/14\') AS Name_Tech_CM,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6/14%\') AS SUM_Tech_CM,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/6/222\') AS Name_Arit_CM,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/6/222%\') AS SUM_Arit_CM,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/7/8\') AS Name_Business_LP,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/7/8%\') AS SUM_Business_LP,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/7/9\') AS Name_Scient_LP,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/7/9%\') AS SUM_Scient_LP,\n' +
    '(SELECT name FROM mdl_course_categories WHERE path LIKE \'/7/10\') AS Name_Engineer_LP,\n' +
    '(SELECT SUM(coursecount) FROM mdl_course_categories WHERE path LIKE \'/7/10%\') AS SUM_Engineer_LP\n'

    