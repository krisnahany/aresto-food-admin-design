<template>
    <div class="wrapper-reservation">
        <div class="calender">
            <i class="fa fa-cog"></i>
            <Calendar></Calendar>
        </div>
        <div class="wrapper-menu">
            <div class="navbar-reservation center box-shadow">
                <a href="#" class="nav-active">Semua</a>
                <a href="#">Konfirmasi</a>
                <a href="#">Tertunda</a>
            </div>
            <div class="reservation-menu">
                <div class="reservation-date">April 12, 2020</div>
                <ReservationList></ReservationList>
                <div class="reservation-list box-shadow" v-for="(list, index) in pendingList" :key="index">
                    <div class="detail">
                        <p>{{ list.nama }}</p>
                        <p class="no" style="color: #BDBECD; font-size: 0.75em;">{{ list.nomer }}</p>
                        <p>{{ list.jam }}</p>
                    </div>
                    <div class="detail-button pending-bg">
                        <button><i class="fa fa-arrow-right"></i></button>
                        <a href="#">Tertunda</a>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from './Calendar'
import ReservationList from './ReservationList'

export default {
    name: 'Reservation',
    components: {
        Calendar,
        ReservationList
    },
    data() {
        return {
            // reservationList: [
            //     {
            //         nama: 'Regina Pollastro',
            //         nomer: 'SV20200309106',
            //         jam: '10 : 00 am'
            //     }
            //     {
            //         nama: 'Mariano Rasgado',
            //         nomer: 'SV20200309108',
            //         jam: '11 : 00 am'
            //     }
            // ],
            pendingList: [
                {
                    nama: 'Mariano Rasgado',
                    nomer: 'SV20200309108',
                    jam: '11 : 00 am'
                }
            ]
        }
    },
}
</script>

<style lang="css" scoped>

    .wrapper-reservation {
        position: relative;
        min-height:100vh;
        
    }

    .wrapper-reservation .calender {
        background-color: #FF4400;
        height: 60vh;
        padding: 15px;
    }

    .wrapper-reservation .calender i {
        color: white;
        text-align: right;
        display: block;
        font-size: 1.6em;
        margin-right: 9px;
    }

    .wrapper-reservation .wrapper-menu {
        animation: slideUp1 0.5s ease-out;
        height: 50%;
        padding: 15px;
        background-color: #F4F4F9;
    }

    .wrapper-reservation .wrapper-menu .navbar-reservation {
        background-color: #ffffff;
        border-radius: 30px;
        position: relative;
        height: 40px;
        font-size: 0.8em;
    }

    .wrapper-reservation .wrapper-menu .navbar-reservation a {
        padding: 7px 27px;
        margin: 2px;
        border-radius: 30px;
        color: #000000;
        font-size: 0.9em;
    }

    .wrapper-reservation .wrapper-menu .navbar-reservation a.nav-active {
        background-color: #FF4400;
        color: #ffffff;
    }

    .wrapper-reservation .wrapper-menu .reservation-menu {
        margin-top: 20px;
        color: #BDBECD;
    }

    .wrapper-reservation .wrapper-menu .reservation-menu .reservation-date {
        text-align: left;
        margin-left: 5px;
        font-size: 0.9em;
    }

    .pending-bg {
        background-color: #FF8457;
        /* background-color: rgba(255, 68, 0, 0.678); */
    }
    
    .reservation-list .detail-button button {
        background-color: #ffffff;
        color: #FF8457;
    } 

    @keyframes slideUp1 {
        0% {
            opacity:0;
            height: 40%;
        }
        100% {
            opacity:1;
            height: 50%;
        }
    }
</style>