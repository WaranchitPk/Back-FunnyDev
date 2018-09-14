import { find } from "./queryStr";

const OrthhersModel = {
  findByCampusAndLimit(req, res, data) {
    req.getConnection((err, connection) => {
      if (err) throw err;
      connection.query(find(data.limit), (err, result) => {
        if (err) throw err;
        res.status(200).json({
          result
        });
      });
    });
  }
};
export default OrthhersModel;