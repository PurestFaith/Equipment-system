<template>
  <div>
    <el-card class="box-card">
      <slot />
      <slot name="table" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss"></style>
