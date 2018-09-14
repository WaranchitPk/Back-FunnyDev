export const find = (limitNum) =>{
    const select = `SELECT mdl_user_enrolments.enrolid,mdl_enrol.courseid,mdl_course.fullname,mdl_course.category,mdl_course_categories.name,COUNT(mdl_enrol.courseid) AS course_count,mdl_course_categories.path
    FROM mdl_user_enrolments 
    INNER JOIN mdl_enrol
    ON mdl_user_enrolments.enrolid = mdl_enrol.id 
    INNER JOIN mdl_course
    ON mdl_enrol.courseid = mdl_course.id
    INNER JOIN mdl_course_categories
    ON mdl_course.category = mdl_course_categories.id
    GROUP BY mdl_user_enrolments.enrolid
    ORDER BY course_count DESC
    LIMIT ${limitNum}`;
    return select
}