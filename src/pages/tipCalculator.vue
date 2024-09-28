<template>
  <div id="app">
    <h1> Le/Tip</h1>
    <div class="app__calculator">
      <div class="app__calculator-column app__calculator-column--left" id="left-column" v-if="!isMobile || showingLeftColumn">
        <switch-button v-model="ifDolar"></switch-button>
        <inputField label="Valor:" type="number" placeholder="73.23" :prependIcon="currencySymbol" v-model="billAmount"></inputField>
        <commonSlider label="Gorjeta" :min="10" :max="20" appendText="%" v-model="tipPercentage"></commonSlider>
        <commonSlider label="Pessoas" :min="2" :max="16" v-model="numPeople"></commonSlider>
      </div>
      <div class="app__calculator-column app__calculator-column--right" v-if="!isMobile || !showingLeftColumn">
          <valueDisplay title="Conta" :value="displayBill" :prefix="currencySymbol"></valueDisplay>
          <valueDisplay title="Gorjeta" :value="tipAmount" :prefix="currencySymbol"></valueDisplay>
          <valueDisplay title="Total" :value="displayTotal" :prefix="currencySymbol"></valueDisplay>
          <valueDisplay title="por Pessoa" :value="individualValue" :prefix="currencySymbol"></valueDisplay>
          <valueDisplay :dummy="convertedComputedValue" title="em R$" :value="convertedValue" :loadingValue="loadingConverter" prefix="R$"></valueDisplay>
      </div>
      <button v-if="isMobile" class="app__toggle-button" @click="toggleColumn">
      {{ showingLeftColumn ? '>' : '<' }}
    </button>
    </div>
  </div>
</template>

<script>
import switchButton from '../components/inputs/switchButton.vue'
import inputField from '../components/inputs/inputField.vue'
import commonSlider from '../components/inputs/commonSlider.vue'
import valueDisplay from '../components/tipCalculator/valueDisplay.vue';
import  {getConvertCurrency}  from '../services/converterService';
import { EventBus } from '../eventbus.js';

export default {
  components: {
    switchButton,
    inputField,
    commonSlider,
    valueDisplay
  },
  data() {
    return {
      billAmount: null,
      numPeople: 2,
      totalTip: null,
      tipPerPerson: null,
      ifDolar: true,
      tipPercentage: 10,
      convertedValue: 0,
      loadingConverter: false,
      isMobile: false,
      showingLeftColumn: true,
    };
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile); 
  },
  methods: {
    async getConvertedValue (individualValue, currency) {
      this.loadingConverter = true
      let promise = 0
      try {
        promise = await getConvertCurrency(individualValue, currency);
        this.convertedValue = promise
    } catch (error) {
        this.billAmount = null
      }
      this.loadingConverter = false
      return promise
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleColumn() {
      this.showingLeftColumn = !this.showingLeftColumn;
    },
  },
  computed: {
    currencySymbol: function () {
      return this.ifDolar ? '$' : '€'
    },
    displayBill: function () {
      return (this.billAmount == null || this.billAmount === '') ? 0.00 : Number(this.billAmount)
    },
    tipAmount: function () {
      return (this.tipPercentage/100*Number(this.displayBill))
    },
    displayTotal: function () {
      return (Number(this.displayBill) + Number(this.tipAmount))
    },
    individualValue: function () {
      return (Number(this.displayTotal)/this.numPeople)
    },
    convertedComputedValue:  function  () {
      let currency = this.ifDolar ? 'USD' : 'EUR'
      let serversConvertedValue = this.getConvertedValue(Number(this.individualValue), currency)
      return (Number(serversConvertedValue))
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  }
};
</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.app__calculator {
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
}

.app__calculator-column {
  flex: 1; 
  margin: 0 8px; 
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.app__toggle-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 50%; 
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #1976D2;
}

@media (max-width: 768px) {
  .app__calculator-column {
    flex-direction: column;
  }
  .app__calculator-column--right {
    flex-basis: 40%; 
    padding: 10px;
  }
}

</style>
