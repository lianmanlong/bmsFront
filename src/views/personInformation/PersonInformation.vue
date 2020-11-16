<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div id="app">
            <div class="register" @click="$router.push('/modifyInformation')">
                <el-image :src="url" :lazy='true' ></el-image>
                <p>信息修改</p>
            </div>
            <div class="register" @click="$router.push('/borrowingHistory')">
                <el-image :src="url" :lazy='true' ></el-image>
                <p>借阅历史</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonInformation",
        data(){
            return {
                 url: require(`@/assets/index/bookmaster.png`),
            }
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

        width: 30%;
        height: 200px;

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