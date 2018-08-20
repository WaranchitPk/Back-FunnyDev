export const sumEachYear = (year) => {
  return `
  SELECT  
    DISTINCT  year(from_unixtime(timecreated)) as Year,
    COUNT(distinct tb.userid,from_unixtime(tb.timecreated,'%d')) as CountYear
  FROM mdl_logstore_standard_log
  WHERE  year(from_unixtime(timecreated)) BETWEEN 2017 AND ${year}
  GROUP BY Year`;
};