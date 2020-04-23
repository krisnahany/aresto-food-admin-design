<template>
    <div class="wrapper-app">
        <div class="banner">
            <div class="banner-bg">
                <div class="banner-wrapper">
                    <div class="title">
                        <h2>aResto Food</h2>
                        <p>Spesialis Makanan Enak</p>
                    </div>
                    <div class="title-admin">Admin</div>
                </div>
            </div>
        </div>
        <div class="wrapper-menu">
            <div class="login-form">
                <form action="">
                    <div class="form-wrapper">
                        <i class="fa fa-envelope-o"></i>
                        <label for="uname">email</label>
                        <input type="email" name="" id="" class="input">
                    </div>
                    <div class="form-wrapper">
                        <i class="fa fa-key"></i>
                        <label for="pswd">sandi</label>
                        <input type="password" name="" id="" class="input">
                    </div>
                    <router-link to="/home" class="button center">Login</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style lang="css">
    .wrapper-app {
        min-height: 100vh;
        position: relative;
    }
    .banner {
        background-image: url("../assets/img/banner.jpg");
        background-repeat: no-repeat;
        position: relative;
        height: 50vh;
        width: 100%;
    }
    .banner-bg {
        background-color: rgba(0, 0, 0, 0.452);
        height: 50vh;
        position: relative;
    }

    .banner .banner-wrapper {
        color: white;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
        position: absolute;
    }

    .banner .banner-wrapper .title p {
        font-size: 0.7em;
        letter-spacing: 0.1em;
    }

    .banner .banner-wrapper .title-admin {
        border: 2px solid white;
        border-radius: 5px;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        padding: 5px;
        margin: 20px 40px 0 40px;
    }

    /* ------------------------------------------------------------------------------------------ */

    .wrapper-menu {
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        background-color: white;
        animation: slideUp 0.5s ease-out;
        position: absolute;
        bottom: 0%;
        width: 100%;
        height: 55%;
        padding: 50px;
    }

    .wrapper-menu .login-form form {
        text-align: left;
    }

    .wrapper-menu .login-form form .form-wrapper {
        margin-bottom: 15px;
    }

    .wrapper-menu .login-form form .form-wrapper i {
        margin-right: 10px;
        color: #DCDCDC;
    }

    .wrapper-menu .login-form form .form-wrapper input {
        background-color: #F0F0F6;
        border: none;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        margin-top: 5px;
    }

    .wrapper-menu .login-form form .button {
        /* display: block; */
        margin-top: 50px;
        height: 50px;
        border: none;
        border-radius: 10px;
        background-color: #FF4400;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        color: #ffffff;
    }

</style>