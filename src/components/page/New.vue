<template>
    <div>
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="编号">
                <el-input v-model="id" placeholder="请输入编号"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="author" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="name" placeholder="备注"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="newAdd">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            author:'',
            name:''
        }
    },
    methods:{
        newAdd(){
            let data = { 
                status: this.id,
                content: this.author,
                name: this.name
            }
            fetch('/api/add', {
                method: 'post',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json',
                'Accept':'application/json' },
            })
            // .then(res =>{console.log(res)})
            .then(res => res.json())
            .then(json => this.$router.push({
                    name: 'list'
                    }));
                }
            }
        }
</script>

