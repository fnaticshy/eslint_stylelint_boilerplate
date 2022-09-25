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

<style lang="scss">
@import "../test-scss-files/component.scss";

.component {
  z-index: 1;
  display: block;
  width: 100px;
  height: 203px;
  font-size: 12rem;
  font-style: normal;
  color: #fff;
  content: "";
  opacity: 1;

  &__inner {
    display: flex;
    height: 200px;
    content: "";
  }
}

.bb {
  display: block;
  width: 100px;
  height: 12px;
  font-style: normal;
  color: #eee;
}

.aa {
  height: 200px;
}
</style>
