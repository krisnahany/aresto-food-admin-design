<template>
    <div>
        <div class="rsrvdetail">
            <button><router-link to="/home"><i class="fa fa-arrow-left"></i></router-link></button>
            <div class="calendar">
                <div class="month">      
                    <ul>
                        <li class="name">Minggu, 12 April 2020</li>
                    </ul>
                </div>

                <div class="week">
                    <ul class="weekdays active">
                        <li>M</li>
                        <li>12</li>
                    </ul>
                    <ul class="weekdays">
                        <li>S</li>
                        <li>13</li>
                    </ul>
                    <ul class="weekdays">
                        <li>S</li>
                        <li>14</li>
                    </ul>
                    <ul class="weekdays">
                        <li>R</li>
                        <li>15</li>
                    </ul>
                    <ul class="weekdays">
                        <li>K</li>
                        <li>16</li>
                    </ul>
                    <ul class="weekdays">
                        <li>J</li>
                        <li style="font-weight: bold">17</li>
                    </ul>
                    <ul class="weekdays">
                        <li>S</li>
                        <li>18</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="wrapper-menu">
            <div class="title">
                <span>Reservation (1)</span>
            </div>
            <div class ="container">
                <div class="timings">
                    <div class="time"> <span> 08:00 </span></div>
                    <div class="time"> <span> 09:00 </span></div>
                    <div class="time"> <span> 10:00 </span></div>
                    <div class="time"> <span> 11:00 </span></div>
                    <div class="time"> <span> 12:00 </span></div>
                    <div class="time"> <span> 13:00 </span></div>
                    <div class="time"> <span> 14:00 </span></div>
                    <div class="time"> <span> 15:00 </span></div>
                </div>

                <div class="days" id="events">
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                    <div class="border-line"></div>
                </div>

                <ReservationList class="reservation-detail"></ReservationList>

            </div>
        </div>
    </div>
</template>

<script>
import ReservationList from './ReservationList'

export default {
    // props:['reservation_detail'],
    name: 'Detail',
    components: {
        ReservationList
    }
}
</script>

<style lang="css" scoped>
    .rsrvdetail {
        background-color: #FF4400;
        height: 50vh;
    }
    button {
        background: transparent;
        display: block;
        padding: 20px 25px 10px 25px;
    }
    button i {
        font-size: 1.2em;
        color: white;
    }

    .month {
        width: 100%;
        text-align: center;
    }

    .month ul {
        margin: 0;
        padding: 0;
    }

    .month ul li {
        color: white;
        font-size: 0.8em;
        text-align: left;
    }

    .month .name {
        padding: 15px 0 15px 25px;
    }

    .week {
        padding: 0 15px;
    }

    .weekdays {
        margin: 0;
        padding: 10px 0;
        display: inline-block;
        width: 13.6%;
        text-align: center;
        color: white;
    }

    .weekdays.active {
        padding: 7px 0;
        font-weight: bold;
        border-radius: 30px;
        background: white;
        color: black !important;
    }

    .weekdays.active li {
        color: black !important;
    }

    .weekdays li {
        text-align: center;
        color: white;
        list-style-type: none;
        margin-bottom: 10px;
    }

    /* --------------------------------------------------------------------------------------- */

    .wrapper-menu {
        background-color: #F4F4F9;
        padding: 30px;
        animation: slideUp2 0.5s ease-out;
        height: 70%;
    }

    .title {
        text-align: left;
        font-size: 0.9em;
        margin-bottom: 10px;
    }
    
    .container {
        display: flex;
        position: relative;
    }

    .timings {
        text-align: right;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.5em;
        box-sizing: border-box;
        border-right: 1px solid #D1D1D1;
        border-width: 2px;
    }

    .timings .time {
        margin: 15px 0;
    }

    .timings span {
        font-size: 1.5em;
        color: #696969;
    }

    .days {
        width: 100%;
        position: absolute;
        width: 85%;
        right: 0;
        margin-top: 20px;
        margin-bottom: 15px;
    }

    .days .border-line {
        width: 100%;
        border-top: 1px solid #D1D1D1;
        border-width: 2px;
        margin-bottom: 43px;
    }

    .reservation-detail {
        position: absolute;
        right: 0;
        top: 23%;
        width: 80%;
        margin-top: 0;
    }

    @keyframes slideUp2 {
        0% {
            opacity:0;
            height: 50%;
        }
        100% {
            opacity:1;
            height: 70%;
        }
    }
</style>