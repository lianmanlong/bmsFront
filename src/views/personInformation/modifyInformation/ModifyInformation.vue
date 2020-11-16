<template>
    <div id="app">
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="table">
            <table border="1" >
               
                <caption style="text-align: center">个人资料</caption>

                
                <tbody>
                <tr>
                    <td>姓名</td>
                    <td>{{name}}</td>
                    <td>性别</td>
                    <td>{{sex}}</td>
                    <td>年龄</td>
                    <td>{{age}}</td>
                </tr>
                <tr>
                    <td>邮箱</td>
                    <td>{{email}}</td>
                    <td>出生年月</td>
                    <td>{{birthday}}</td>
                    <td>借阅</td>
                    <td>{{isBorrow}}</td>
                </tr>
                <tr>
                    <td>联系电话</td>
                    <td>{{tel}}</td>
                    <td>居住地址</td>
                    <td colspan="3">{{residentialAddress}}</td>
                </tr>
                <tr>
                <td>个人描述</td>
                <td colspan="5">
                        <p >{{individualDescription}}</p>
                </td>
                </tr>
                </tbody>
            </table>
             <el-button type="success" @click="edit">编辑</el-button>
        </div>
        <div>
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
           
            <el-form-item label="修改密码" prop="name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="name">
                <el-input size="middle"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round @click="istrue">确认</el-button>

            </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModifyInformation",
        data() {
            return {
               name: '张三',
               sex: '男',
               age: '18',
                email: '',
                birthday: '',
                isBorrow: '',
                residentialAddress: '',
                individualDescription: 'individualDescription',
            }
        },
        methods: {
            istrue() {

            },
            edit(){
                this.$router.push("/editPersonInformation");
            }

        },
    }
</script>

<style scoped>
table tbody tr td:nth-child(odd) {
    background-color: #F2F2F2;
}

#app {
    width: 100%;
    height: 100%;
}
.table {
    height: 30%;
    width: 60%;
    margin:200px auto 0 auto;

    background-color: #FFFFFF;

}
    table {

        width: 100%;
        height: 90%;


    }

</style>