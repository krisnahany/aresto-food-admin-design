import Login from './components/Login.vue';
import Reservation from './components/Reservation.vue';
import Detail from './components/ReservationDetail.vue';

export default [
    {path: '/', component: Login},
    {path: '/home', component: Reservation},
    {path: '/detail', component: Detail}
]