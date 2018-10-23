import Controller from "./controllers";

export const routes = (str, app) => {
    //show year in select
    app.get(`${str}/valueYear`, Controller.FindValueYear);
    //show month in select
    app.get(`${str}/valueMonth/:year`, Controller.FindValueMonth);
    //show month data and countData -- User View
    app.get(`${str}/userview/findYear/:year`, Controller.UserViewFindMonthData);
    //show day data and countData -- User View
    app.get(`${str}/userview/findMonth/:year/:month`, Controller.UserViewFindDayData);

    //show month data and countData -- User Use
    app.get(`${str}/useruse/findYear/:year`, Controller.UserUseFindMonthData);
    //show day data and countData -- User Use
    app.get(`${str}/useruse/findMonth/:year/:month`, Controller.UserUseFindDayData);

    //show Sum Each Year
    app.get(`${str}/userview/findSum/:year`, Controller.findSumEachYear)

    //show sum each year
    app.get(`${str}/useruse/find_train/:year`, Controller.findSumEachYearUserUse)

};
