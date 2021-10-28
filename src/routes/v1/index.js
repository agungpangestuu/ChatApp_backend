const express = require('express');
const userRoute = require('./user.route');
const roomRoute = require('./room.route');
const chatRoute = require('./chat.route');
// const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  // {
  //   path: '/rooms',
  //   route: roomRoute,
  // },
  {
    path: '/chats',
    route: chatRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;