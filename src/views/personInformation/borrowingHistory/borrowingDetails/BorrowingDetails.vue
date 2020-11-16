<template>
    <div>
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
        </div>
        <div class="header">
            <el-row>
                <el-col offset="15" :span="5">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="1">
                    <el-button type="success">搜索</el-button>
                </el-col>
            </el-row>

        </div>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="日期"
                        width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="姓名"
                        width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">详情</el-button>

                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>


    </div>
</template>

<script>
    export default {
        name: "BorrowingDetails",
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
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
    }
</script>

<style scoped>
    .table {
        height: 30%;
        width: 60%;
        margin:auto ;

        background-color: #FFFFFF;

    }
    table {

        width: 100%;
        height: 90%;


    }
</style>