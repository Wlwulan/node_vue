<template>
    <div>
        <h1>用户列表信息</h1>
  <el-table
    :data="list.data"
    border
    style="width: 100%">
    <el-table-column
      prop="status"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="备注">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
import fetch from 'node-fetch'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        getData(){
            fetch('/api', {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(json => this.list = json);
            }
        }
}
</script>
<style>
    .title{
        color: red
    }
    .lal{
        font-size: 12px;
    }
</style>


