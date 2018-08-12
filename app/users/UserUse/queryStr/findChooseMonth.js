export const UserUsefindChooseYearAndMonth = (year,month) => {
  return `SELECT
            DISTINCT day(from_unixtime(timecreated)) AS day,
            COUNT(timecreated) AS countDay
            FROM mdl_logstore_standard_log
            WHERE year(from_unixtime(timecreated)) = ${year} AND MONTH(from_unixtime(timecreated)) = ${month}
            GROUP BY day`;
};

export const UserUseFindAllMonthValue = year => {
  return `SELECT
            DISTINCT month(from_unixtime(timecreated)) as month
          FROM mdl_logstore_standard_log
          WHERE year(from_unixtime(timecreated)) = ${year}`
}