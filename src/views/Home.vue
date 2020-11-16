<template>
<div id="app">
    <div >
        <div class="manager">
            <el-image :src="url" :lazy='true' ></el-image>
            <p>图书管理</p>
        </div>
        <div class="login">
            <el-image :src="loginUrl" :lazy='true' @click.stop="$router.push('/login')"></el-image>
            <p>登录</p>
        </div>
        <div class="register">
            <el-image :src="registerUrl" :lazy='true' @click.stop="$router.push('/register')"></el-image>
            <p>注册</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Home",
    components: {
        // eslint-disable-next-line vue/no-unused-components

    },
    data() {
        return {
            info: '',
            url: require(`@/assets/index/bookmaster.png`),
            loginUrl: require(`@/assets/index/login.png`),
            registerUrl: require(`@/assets/index/register.png`),
        }
    },

};
</script>

<style scoped>


.manager {
    width: 200px;
    height: 220px;
    position: absolute;
    top: 20px;
    left: 40%;

}
p {
    margin-top: 5px;
    text-align: center;
}
.el-image {
    width: 100%;
    height: 200px;
    display: block;
}
.login {
    width: 200px;
    height: 220px;
    position: absolute;
    left: 200px;
    top: 250px;

}

.register {
    width: 200px;
    height: 220px;
    position: absolute;
    top: 250px;
    right: 200px;
}
</style>
