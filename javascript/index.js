const vm = new Vue({
  el: '#app',
  data: {
    spent: '',
    allSpending: [],
  },
  computed: {
    totalSpend() {
      return total = this.allSpending.reduce((total, value) => {
        value = Number(value);
        return total + value;
      }, 0);
    },
  },
  methods: {
    putSpentIntoAllSpending() {
      this.spent = this.spent.replace(/\D/g, '').replace(/(\d{2}$)/, '.$1');

      if (this.spent == '' || this.spent == '0.00') return;

      this.allSpending.unshift(this.spent);
      this.spent = '';
    },
    excludePrice(index) {
      this.allSpending.splice(index, 1);
    },
    clearAllSpending() {
      this.allSpending = [];
    },
    formatValueInputToCurrency() {
      let inputValue = this.spent;

      inputValue = inputValue.replace(/\D/g, '');

      if (inputValue.length == 1) 
        inputValue = ('0' + inputValue);

      inputValue = inputValue.replace(/(\d{2}$)/, '.$1');

      this.spent = Number(`${inputValue}`).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  filters: {
    priceInReal(value) {
      value = Number(value);
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  watch: {
    allSpending() {
      window.localStorage.allSpending = JSON.stringify(this.allSpending);
    },
  },
  created() {
    this.allSpending = JSON.parse(window.localStorage.allSpending);
  },
});
