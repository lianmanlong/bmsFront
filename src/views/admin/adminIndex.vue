<template>
    <div>
       <div>
        <el-row>
  <el-col :span="2" offset="12"><span>用户列表</span></el-col>
  <el-col :span="2"><span>图书借阅与归还</span></el-col>
  <el-col :span="2"><span>注销用户</span></el-col>
  <el-col :span="1"><span>书库</span></el-col>
  <el-col :span="2"><span>首页公告管理</span></el-col>
  <el-col :span="2"><span>图书借阅设计</span></el-col>

    </el-row>
</div>
        <div class="wrap">
            <div class="left">
            <div class="manager">
                <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
                <p>图书管理</p>
            </div>
            <div class="manager">
                <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
                <p>图书管理2</p>
            </div>
                <div class="manager">
                <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
                <p>图书管3</p>
            </div>
            </div>
            <div class="left">
                <div class="manager">
                    <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
                    <p>图书管理</p>
                </div>
                <div class="manager">
                    <el-image :src="url" :lazy='true' @click.stop="$router.push('/manager')"></el-image>
                    <p>图书管理2</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "adminIndex",
        data() {
            return {
                url: require(`@/assets/admin/search.png`),

            }
        }
    }
</script>

<style scoped>

    .el-col {
        text-align: center;
    }
    .manager {
        width: 100%;
        height: 150px;
        background-color: #fee;
        border-radius: 10px;
        margin-top: 20px;

    }
    .el-image {
        width: 100px;
        height: 78%;
    }
    p{
        text-align: center;
        height: 10%;
    }
    .left {
        width: 48%;
    }
    .wrap {
        width: 60%;
        margin:40px auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>