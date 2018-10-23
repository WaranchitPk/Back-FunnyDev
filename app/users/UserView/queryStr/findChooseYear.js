export const selectYear = (year) => {
  switch (year) {
    case 2017:
      return findYear2017Sql;
    default:
      return findOrtherYearSql(year)
  }
};

const findYear2017Sql = `SELECT
                            COUNT(tb.timecreated) as countMonth,
                            MONTH(from_unixtime(tb.timecreated)) as month
                         FROM mdl_logstore_standard_log as tb
                         WHERE tb.timecreated between UNIX_TIMESTAMP('2017-01-01') and UNIX_TIMESTAMP('2017-12-31')
                         GROUP BY month`;

const findOrtherYearSql = (year) => {
  return `SELECT
              COUNT(tb.timecreated) as countMonth,
              MONTH(from_unixtime(tb.timecreated)) as month
          FROM mdl_logstore_standard_log as tb
          WHERE tb.timecreated between UNIX_TIMESTAMP('${year}-01-01') and UNIX_TIMESTAMP('${year}-12-31')
          GROUP BY month`
};

export const findAllYearValue = 'SELECT DISTINCT YEAR(from_unixtime(tb.timecreated)) AS YEAR FROM mdl_logstore_standard_log as tb'
