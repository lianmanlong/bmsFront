<template>
<div>
    <div class="wrap">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="登录" prop="name">
                <el-input></el-input>
            </el-form-item>

            <el-form-item label="输入密码" prop="name">
                <el-input></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" round @click="isLogin">登录</el-button>

            </el-form-item>
        </el-form>
    </div>

    <div class="login">
        <el-image :src="loginUrl" :lazy='true' ></el-image>

    </div>
</div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {

                loginUrl: require(`@/assets/index/login.png`),
            }
        },
        methods: {
            isLogin() {
                this.$router.push("/borrowerPage");
            }
        }
    }
</script>

<style scoped>
    .wrap {

        position: absolute;
        left: 80px;
        top: 250px;
    }
    .login {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .el-image {
        width: 500px;
        height: 500px;

    }
</style>