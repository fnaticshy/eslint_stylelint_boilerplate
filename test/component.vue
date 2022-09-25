<template>
  <div>
    test
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

</style>
