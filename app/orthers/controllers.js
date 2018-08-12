import Model from './model';

const OrtherController = {
    find(req, res) {
        const data = {
            limit: req.query.limit,
            campus: req.query.campus
        };
        Model.findByCampusAndLimit(req,res,data)
    }
};
export default OrtherController;