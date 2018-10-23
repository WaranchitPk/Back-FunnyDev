import Model from "./model";

const UserController = {
    FindValueYear(req, res) {
        Model.findYearData(req, res);
    },
    FindValueMonth(req, res) {
        const {year} = req.params;
        Model.findMonthValue(req, res, year);
    },
    UserViewFindMonthData(req, res) {
        const {params: {year}} = req;
        Model.UserViewFindMonthData(req, res, +year);
    },
    UserViewFindDayData(req, res) {
        const {year, month} = req.params;
        Model.UserViewFindDayData(req, res, year, month);
    },
    UserUseFindMonthData(req, res) {
        const {params: {year}} = req;
        Model.UserUsefindMonthData(req, res, +year);
    },
    UserUseFindDayData(req, res) {
        const {year, month} = req.params;
        Model.UserUsefindDayData(req, res, year, month);
    },
    findSumEachYear(req, res) {
        const {year} = req.params;
        Model.findSumEachYear(req, res, year)
    },
    findSumEachYearUserUse(req, res) {
        const {year} = req.params;
        Model.findSumEachYearUserUse(req, res, year)
    }
};
export default UserController;
