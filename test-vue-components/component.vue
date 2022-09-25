<template>
  <div>
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

.b {
  width: 100px;
  color: red;
  height: 12px;
  display: block;
  font-style: normal;
}
</style>
