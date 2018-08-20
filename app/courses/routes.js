import Controller from "./controllers";

export const routes = (str, app) => {
  app.get(`${str}`, Controller.findDashBoardCampus);
  app.get(`${str}/faculty`, Controller.findCourseEachFaculty);
  //sum Course
  app.get(`${str}/sumcourse/:year`, Controller.findSumCourse);

  app.get(`${str}/findTrain/:id/:year`,Controller.findTrainCampus);
};