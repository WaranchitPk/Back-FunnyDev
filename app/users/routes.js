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

};