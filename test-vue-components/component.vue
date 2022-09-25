<template>
  <div class="bb">
    testg
  </div>
</template>

<script>
export default {
  name: 'Component',

  data() {
    return {
      name     : 'test',
      testings : true,
    };
  },

  created() {},

  methods: {
    go(value) {
      return `it is ${value}`;
    },
  },
};
</script>

<style>
@import "../test-scss-files/component.scss";

.bb {
  display: block;
  width: 100px;
  height: 12px;
  font-style: normal;
  color: #eee;
}
</style>
