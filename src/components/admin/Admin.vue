<!-- eslint-disable vue/multi-word-component-names -->
<script>
import AdminContour from "@/components/admin/AdminContour.vue";
import AdminText from "@/components/admin/AdminText.vue";

export default {
  name: "Admin",
  components: {AdminText, AdminContour}
}
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 用户管理</span>
      <AdminContour></AdminContour>

    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-check"></i> 文章审核</span>
      <AdminText></AdminText>

    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>

</style>