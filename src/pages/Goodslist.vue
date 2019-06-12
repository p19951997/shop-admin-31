<template>
<div>
   <el-row type="flex" justify='space-between' class="goods-list-header">
      <div>
        <el-button>新增</el-button>
        <el-button type="danger">删除</el-button>
      </div>
      <div>
         <el-input placeholder="请输入内容" class="input-with-select">
           <el-button slot="append" icon="el-icon-search"></el-button>
         </el-input>
      </div>
   </el-row>
   
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">

    <el-table-column
      type="selection"
      width="55">
    </el-table-column>

    <el-table-column
      label="标题"
      width="300">
      <template slot-scope="scope">
          <!-- 自定义模板 -->
          <!-- template的slot-scoped的值为变量名scope -->
          <!-- scope.row相当于template的slot中的每一项对象 -->
          <el-row type="flex" align="middle">
            <img :src="scope.row.imgurl" class="goods-img">
            <div>
              {{ scope.row.title }}
            </div>
          </el-row>
      </template>
    </el-table-column>

    <el-table-column
      prop="categoryname"
      label="类型"
      width="120">
    </el-table-column>
    
    <el-table-column
      prop="sell_price"
      label="价格"
      width="120">
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <div class="block">
      <!-- size-change: 显示条数切换 -->
        <!-- current-change：页数切换 -->
        <!-- current-page: 当前的页面 -->
        <!-- page-sizes：条数的选项 -->
        <!-- page-size:当前的条数 -->
        <!-- layout:默认布局 -->
        <!-- total: 数据全部条数 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [
        //   {
        //   id: 103,        
        //   title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
        //   is_top: 1,
        //   is_hot: 1,
        //   is_slide: 1,      
        //   categoryname: "男装",
        //   img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        //   imgurl:"http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        //   goods_no: "NZ0000000002",
        //   stock_quantity: 200,
        //   market_price: 1000,
        //   sell_price: 800   
        // }
        ],
        selectGoods:[],// 选中的商品
        pageSize:5,//每一页的条数
        pageIndex:1,//默认当前页数，随着页数变化而变化
        searchValue:'',//搜索关键字
        total:0,//总也是
      }
    },
    methods: {
      getList(){
            // pageIndex: 当前的页面，会变化
            // pageSize：数据条数，会变化
            // searchValue：搜索关键字
        this.$axios({
          url:`http://localhost:8899/admin/goods/getlist?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&searchvalue=${this.searchValue}`,
          method:`GET`,
        }).then(res => {
          const data = res.data;
          console.log(data);
          this.tableData = data.message;
          this.total = data.totalcount
          console.log(total);
          console.log(goods);
          })
      },
      // 选择每一项触发
      handleSelectionChange(val){
        console.log(val);
      },
      // 编辑
      handleEdit(goods) {
        console.log(goods);
      },
      // 删除
      handleDelete(goods) {
        console.log(goods);
      },
      // 多条数据切换
      handleSizeChange(val) {
        this.pageSize = val
        console.log(`每页 ${val} 条`);
      },
      // 页数切换
      handleCurrentChange(val) {
        this.pageIndex = val
        this.getList()
        console.log(`当前页: ${val}`);
      },
      
    },
    mounted(){
      this.getList()
    }
}
</script>

<style>
  .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .input-with-select{
    width: 300px;
  }
  .goods-list-header{
    padding: 20px 0;
  }
  .block{
    float: left;
  }
  .goods-img{
      width:60px;
      height:60px;
      /*表示元素压缩的倍数，如果是0，表示不会被挤压*/
      flex-shrink: 0;
      margin-right:5px;
  }
</style>
