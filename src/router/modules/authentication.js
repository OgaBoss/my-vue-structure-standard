const authRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "login" */ '../../views/Home.vue'),
  },
];

export default authRoute;
