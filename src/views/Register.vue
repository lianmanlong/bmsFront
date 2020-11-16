<template>
<div>
    <div class="wrap">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">

            <el-form-item label="输入密码" prop="name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round>注册</el-button>

            </el-form-item>
        </el-form>
    </div>
    <div class="wrapIn">
        <el-image :src="registerUrl" :lazy='true' @click.stop="$router.push('/register')"></el-image>
    </div>
</div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            registerUrl: require(`../assets/index/register.png`),
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',

            },

            rules: {
                name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }
                ],
                region: [{
                    required: true,
                    message: '请选择活动区域',
                    trigger: 'change'
                }],
                date1: [{
                    type: 'date',
                    required: true,
                    message: '请选择日期',
                    trigger: 'change'
                }],
                date2: [{
                    type: 'date',
                    required: true,
                    message: '请选择时间',
                    trigger: 'change'
                }],
                type: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个活动性质',
                    trigger: 'change'
                }],
                resource: [{
                    required: true,
                    message: '请选择活动资源',
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: '请填写活动形式',
                    trigger: 'blur'
                }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }

}
</script>

<style scoped>
.wrap {

    position: absolute;
    right: 200px;
    top: 150px;
}

.el-image {
    width: 300px;
    height: 300px;

}

.wrapIn {
    position: absolute;
    left: 200px;
    top: 150px;
}
</style>
