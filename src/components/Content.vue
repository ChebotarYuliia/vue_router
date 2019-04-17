<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {},
  computed: {},
  methods: {}
};
</script>

<style>
.content {
  flex: 1 1 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>