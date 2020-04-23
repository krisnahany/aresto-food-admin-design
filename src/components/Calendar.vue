<template>
    <div class="month-bg">
        <div class="month">      
            <ul>
                <li class="prev">&#10094;</li>
                <li class="next">&#10095;</li>
                <li class="name">April</li>
            </ul>
        </div>

        <ul class="weekdays">
            <li>M</li>
            <li>S</li>
            <li>S</li>
            <li>R</li>
            <li>K</li>
            <li>J</li>
            <li>S</li>
        </ul>

        <ul class="days">  
            <li style="color: #D9C7C1">29</li>
            <li style="color: #D9C7C1">30</li>
            <li style="color: #D9C7C1">31</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li><router-link to="/detail"><span class="active">12</span></router-link></li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li><span class="active">17</span></li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li><span class="active">21</span></li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li style="color: #D9C7C1">1</li>
            <li style="color: #D9C7C1">2</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Calendar'
}
</script>

<style lang="css" scoped>
    .month {
        padding: 0 6px;
        width: 100%;
        text-align: center;
    }

    .month ul {
        margin: 0;
        padding: 0;
    }

    .month ul li {
        color: white;
        font-size: 20px;
        list-style-type: none;
    }

    .month .prev {
        float: left;
        margin-top: 10px;
        padding: 3px 11px;
        background-color: rgba(0, 0, 0, 0.219);
        border-radius: 50%;
    }

    .month .next {
        float: right;
        margin-top: 10px;
        padding: 3px 11px;
        background-color: rgba(0, 0, 0, 0.219);
        border-radius: 50%;
    }

    .month .name {
        padding: 15px;
        font-size: 1.2em;
    }

    .weekdays {
        margin: 0;
        padding: 10px 0;
    }

    .weekdays li {
        display: inline-block;
        width: 13.6%;
        color: #666;
        text-align: center;
        color: white;
    }

    .days {
        padding: 10px 0;
        /* background: #eee; */
        background-color: #FF4400;
        margin: 0;
    }

    .days li {
        list-style-type: none;
        display: inline-block;
        width: 13.6%;
        text-align: center;
        margin-bottom: 15px;
        font-size:13px;
        color: white;
    }

    .days li .active {
        padding: 7px;
        font-weight: bold;
        border-radius: 50%;
        background: white;
        color: black !important
    }

    /* Add media queries for smaller screens */
    @media screen and (max-width:720px) {
        .weekdays li, .days li {width: 13.1%;}
    }

    @media screen and (max-width: 420px) {
        .weekdays li, .days li {width: 12.5%;}
        .days li .active {padding: 2px;}
    }

    @media screen and (max-width: 290px) {
        .weekdays li, .days li {width: 12.2%;}
    }
</style>