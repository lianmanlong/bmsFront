<template>
    <div >
        <div id="app">
        <div class="register" @click="$router.push('/personInformation')">
            <el-image :src="registerUrl" :lazy='true' ></el-image>
            <p>我的信息</p>
        </div>
        <div class="register" @click="$router.push('/showBookRock')">
            <el-image :src="registerUrl" :lazy='true' ></el-image>
            <p>我的书架</p>
        </div>
        <div class="register" @click="$router.push('/searchBook')">
            <el-image :src="registerUrl" :lazy='true' ></el-image>
            <p>图书库</p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BorrowerPage",
        data() {
            return {
                info: '',
                url: require(`../../assets/index/bookmaster.png`),
                loginUrl: require(`../../assets/index/login.png`),
                registerUrl: require(`../../assets/index/register.png`),
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #app {
        display: flex;
        position: absolute;
        top: 35%;
        width: 100%;
        justify-content: space-around;
    }
.register {

    width: 20%;
    height: 100px;

}
    .el-image {
        width: 100%;
        height: 95%;

    }
p {
    margin-top: 5px;
    text-align: center;
}
</style>