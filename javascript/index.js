const vm = new Vue({
  el: '#app',
  data: {
    spent: '',
    allSpending: [],
  },
  methods: {
    putSpendIntoAllSpending() {

      if (this.spent == '') return;

      this.allSpending.push(this.spent);
      this.spent = '';
    },
    excludePrice(index) {
      this.allSpending.splice(index, 1);
    },
    clearAllSpending() {
      this.allSpending = [];
    }
  },
});