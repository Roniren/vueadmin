 <template>
  <div class="temp">
    <el-row>
      <el-col :span="4">
        <!-- 左边菜单 -->
        <img src="../../start/img/logo.png" alt="">
        <div class="layout menu">
          <el-menu default-active="1-1" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>购物商城</template>
              <el-menu-item-group>
                <router-link to="/admin/goodslist">
                  <el-menu-item index="1-1">内容管理</el-menu-item>
                </router-link>
                <el-menu-item index="1-2">分类管理</el-menu-item>
                <el-menu-item index="1-3">评论管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-message"></i>订单管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">订单列表</el-menu-item>
                <el-menu-item index="2-2">分类管理</el-menu-item>
                <el-menu-item index="2-3">评论管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <el-row>
            <!-- 顶部菜单 -->
            <el-col :span="24">
              <div class="topbg">
                <el-row>
                  <el-col :span="1">
                    <div class="grid-content bg-purple">
                      <i class="el-icon-menu"></i>
                    </div>
                  </el-col>
                  <el-col :span="23">
                    <div class="grid-content bg-purple-light">
                      欢迎登录
                      <el-dropdown split-button type="primary">
                        更多菜单
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>修改密码</el-dropdown-item>
                          <el-dropdown-item>注销登录</el-dropdown-item>
                          <el-dropdown-item>预览网站</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row>
              <el-col :span="24">
               <!-- 下面的窗帘 占位符-->
                <router-view></router-view>
              </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<!--2定义组件相关对象-->
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style>

</style>