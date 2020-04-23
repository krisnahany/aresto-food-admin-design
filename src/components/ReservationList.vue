<template>
    <div>
        <div class="reservation-list box-shadow" v-for="(list, index) in reservationList" :key="index">
            <div class="detail">
                <p>{{ list.nama }}</p>
                <p style="color: #BDBECD; font-size: 0.7em;">{{ list.nomer }}</p>
                <p class="time">{{ list.jam }}</p>
            </div>
            <div class="detail-button">
                <button><i class="fa fa-arrow-right"></i></button>
                <a href="#">Konfirmasi</a>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReservationList',
    data() {
        return {
            reservationList: [
                {
                    nama: 'Regina Pollastro',
                    nomer: 'SV20200309106',
                    jam: '10 : 00 am'
                },
                // {
                //     nama: 'Mariano Rasgado',
                //     nomer: 'SV20200309108',
                //     jam: '11 : 00 am'
                // }
            ]
        }
    }
}
</script>

<style lang="css">
    /* ---------- reservation list ---------- */

    .reservation-list {
        background-color: #ffffff;
        border-radius: 6px;
        margin-top: 10px;
        position: relative;
        width: 100%;
    }

    .reservation-list .detail {
        float: left;
        text-align: left;
        padding: 15px 0 15px 20px;
        width: 50%;
    }

    .reservation-list .detail p {
        font-size: 0.75em;
        color: black;
        padding: 2px 0;
    }

    .reservation-list .detail .time {
        margin-top: 5px;
    }

    .reservation-list .detail-button {
        float: right;
        text-align: right;
        padding: 15px 20px 15px 0;
        width: 50%;
    }
    
    .reservation-list .detail-button button {
        background-color: #A2A4B9;
        border-radius: 50%;
        padding: 5px 7px;
        color: #ffffff;
        display: inline-block;
    }
    .reservation-list .detail-button a {
        display: block;
        background-color: #FF4400;
        color: #ffffff;
        border-radius: 5px;
        padding: 5px 10px;
        margin-top: 10px;
        font-size: 0.75em;
        width: 80px;
        text-align: center;
        margin-left: auto;
    }
</style>