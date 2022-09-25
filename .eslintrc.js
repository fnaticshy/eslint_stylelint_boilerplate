module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:vue/vue3-recommended', // Use this if you are using Vue.js 3.x.
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    'airbnb',
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars' : 'error',
    'key-spacing'        : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],
    quotes                     : ['error', 'single'],
    'no-mixed-spaces-and-tabs' : 'error',
  },
};
