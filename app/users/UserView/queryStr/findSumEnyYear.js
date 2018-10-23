export const sumEachYear = (year) => {
  return `
SELECT
       year(from_unixtime(timecreated)) as Year,
       COUNT(timecreated) as CountYear
  FROM mdl_logstore_standard_log as tb
  WHERE tb.timecreated
            between UNIX_TIMESTAMP('2017-01-01') and UNIX_TIMESTAMP('2017-12-31')
     or tb.timecreated between UNIX_TIMESTAMP('2018-01-01') and UNIX_TIMESTAMP('2018-12-31')
group by Year`;
};
