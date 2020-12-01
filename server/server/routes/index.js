import TodoRouter from './sticky.route';

//intialise the routes with /
export default (app) => {
  app.use('/', TodoRouter);
};