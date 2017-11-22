<template>
    <div class="temp">
        <!-- 面包屑导航组件 -->
        <el-row>
            <el-col :span="24">
                <div class="abread bt-line">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>知识管理</el-breadcrumb-item>
                        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
                        <el-breadcrumb-item>信详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <!-- 搜索框的内容 -->
        <el-row>
            <el-col :span="24">
                <div class="abread bt-line">
                    <el-row>
                        <el-col :span="6">
                            <el-button size="small">新增</el-button>
                            <el-button size="small">全选</el-button>
                            <el-button size="small">删除</el-button>
                        </el-col>
                        <el-col :span="5" :offset="13">
                            <el-input placeholder="请输入搜索内容" icon="search" v-model="searchValue" :on-icon-click="getlist" @keydown.13="getlist">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!-- 列表信息 -->
        <el-row>
            <el-col :span="24">
                <el-table ref="multipleTable" :data="list" border tooltip-effect="dark" style="width: 100%">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="title" label="标题">
                    </el-table-column>
                    <el-table-column prop="categoryname" label="所有属性" width="120">
                    </el-table-column>
                    <el-table-column prop="stock_quantity" label="库存" width="80">
                    </el-table-column>
                    <el-table-column prop="market_price" label="市场" width="80">
                    </el-table-column>
                    <el-table-column prop="sell_price" label="销售价" width="80">
                    </el-table-column>
                    <el-table-column label="属性" width="120">
                        <template scope="scope">
                            <i v-bind="{class:'el-icon-picture '+(scope.row.is_slide==1?'':'unlist')}"></i>
                            <i v-bind="{class:'el-icon-upload '+(scope.row.is_top==1?'':'unlist')}"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template scope="scope">
                            <a href="#">修改</a>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- page页码 -->
        <el-row>
            <el-col :span="24">
                <el-pagination
                  @size-change="pageSizeChange"
                  @current-change="pageCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[1, 10, 20, 30]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalCount">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      searchValue: "",
      list: []
    };
  },
  methods: {
      //显示几条 一页上
    pageSizeChange(size) {
        // console.log(size);
        this.pageSize=size;
        this.getlist();
    },
    pageCurrentChange(currentPage) {
        // console.log(currentPage);
        this.currentPage=currentPage;
        this.getlist();
    },
    getlist() {
        // console.log(this.searchValue);
      var url =
        "/admin/goods/getlist?pageIndex=" +
        this.currentPage +
        "&pageSize=" +
        this.pageSize +
        "&searchvalue=" +
        this.searchValue;
        console.log(url);
      //发送ajax请求
      this.$ajax.get(url).then(res => {
        this.list = res.data.message;
        //   console.log(this.list);
        //当前商品总数赋值
        this.totalCount= res.data.totalcount;
      });
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>

<style>
.unlist{
    color:rgba(0,0,0,.4);
}
</style>