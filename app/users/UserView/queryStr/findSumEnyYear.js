export const sumEachYear = (year) => {
  return `
  SELECT  
    DISTINCT  year(from_unixtime(timecreated)) as Year,
    COUNT(timecreated) as CountYear
  FROM mdl_logstore_standard_log
  WHERE  year(from_unixtime(timecreated)) BETWEEN 2017 AND ${year}
  GROUP BY Year`;
};