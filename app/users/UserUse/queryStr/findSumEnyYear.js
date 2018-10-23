export const sumEachYear = (year) => {
  return `
SELECT sum(t1.countMonth) as sumUser,t1.year FROM (
                               SELECT COUNT(distinct userid,from_unixtime(tb.timecreated, '%d')) as countMonth,
                                      MONTH(from_unixtime(tb.timecreated)) as month,
                                      year(from_unixtime(tb.timecreated)) year
FROM mdl_logstore_standard_log as tb
WHERE tb.timecreated
          between UNIX_TIMESTAMP('2017-09-01') and UNIX_TIMESTAMP('2017-12-31')
                               or tb.timecreated
          between UNIX_TIMESTAMP('2018-01-01') and UNIX_TIMESTAMP('2018-12-31')
                               group by year,month) as t1

group by t1.year`;
};
