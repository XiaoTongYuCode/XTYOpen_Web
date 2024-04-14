<!-- eslint-disable vue/multi-word-component-names -->
<script>
import AdminText from "@/components/admin/AdminText.vue";
import UserContour from "@/components/user/UserContour.vue";

export default {
  name: "User",
  components: {UserContour, AdminText}
}
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 用户管理</span>
      <UserContour></UserContour>

    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-check"></i> 文章审核</span>
      <AdminText></AdminText>

    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>