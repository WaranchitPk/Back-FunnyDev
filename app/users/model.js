import {
  selectYear,
  findAllYearValue
} from "./UserView/queryStr/findChooseYear";
import {
  findAllMonthValue,
  findChooseYearAndMonth
} from "./UserView/queryStr/findChooseMonth";
import { UserUseSelectYear } from "./UserUse/queryStr/findChooseYear";
import { UserUsefindChooseYearAndMonth } from "./UserUse/queryStr/findChooseMonth";

const userModel = {
  // UserView
  UserViewFindMonthData(req, res, year) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(selectYear(year), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  findYearData(req, res) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findAllYearValue, (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  findMonthValue(req, res, year) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findAllMonthValue(year), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  UserViewFindDayData(req, res, year, month) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(findChooseYearAndMonth(year, month), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  //UserUse
  UserUsefindMonthData(req, res, year) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(UserUseSelectYear(year), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  },
  UserUsefindDayData(req, res, year, month) {
    req.getConnection((err, connection) => {
      if (err) return err;
      connection.query(UserUsefindChooseYearAndMonth(year, month), (err, result) => {
        if (err) return err;
        res.status(200).json({
          result
        });
      });
    });
  }
};
export default userModel;