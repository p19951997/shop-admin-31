<template>
  <el-form ref="form" class="el-form" :model="form" label-width="80px">
    <el-form-item label="所属类型">
      <el-select v-model="form.category_id" placeholder="请选择类别">
        <el-option
        v-for="(item,index) in categorys"
        :key="index"
        :label="item.title"
        :value="item.category_id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否发布">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="推荐类型">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="置顶" name="type"></el-checkbox>
        <el-checkbox label="热门" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="内容标题">
        <el-input type="text"></el-input>
    </el-form-item>
    <el-form-item label="副标题">
        <el-input type="text"></el-input>
    </el-form-item>
    <el-form-item label="内容摘要">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        categorys:[]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted(){
        this.$axios({
            url:`http://localhost:8899/admin/category/getlist/goods`,
            method:'GET',
        }).then(res => {
            const { message,status } = res.data
            console.log(message);
            this.categorys = message
        })
    }
}
</script>

<style>
.el-form {
  margin-top: 20px;
}
</style>
