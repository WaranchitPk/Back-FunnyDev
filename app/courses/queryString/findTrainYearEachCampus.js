//path /2

export const changeShowTrain = (year, idShow) => {
  switch (idShow) {
    case "1":
      return ChiangRaiCampus(year);

    case "2":
      return TakCampus(year);

    case "3":
      return NanCampus(year);

    case "4":
      return PitsanulokCampus(year);

    case "5":
      return ChiangmaiCampus(year);

    case "6":
      return LamphangCampus(year);
    default:
      return ""
  }
};
export const ChiangRaiCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/2/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};
//path /3
export const TakCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/3/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};
//path /4
export const NanCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/4/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};
//path /5
export const PitsanulokCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/5/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};
//path /6
export const ChiangmaiCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/6/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};
//path /7
export const LamphangCampus = (year) => {
  return `SELECT 
            from_unixtime(course.timecreated,'%Y') as date,
            COUNT(cate.coursecount) as countCourse
          FROM mdl_course_categories as cate 
          INNER JOIN mdl_course as course on course.category = cate.id
          WHERE cate.path LIKE '/7/%' && from_unixtime(course.timecreated,'%Y') BETWEEN 2016 AND ${year}
          GROUP BY date`;
};