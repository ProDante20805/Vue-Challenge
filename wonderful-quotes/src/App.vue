<template>
  <main class="container">
    <header>
      <app-header :quoteCount="quotes.length" :quoteMax="maxQuote"></app-header>
    </header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row mt-2 mb-2">
      <div class="col-lg-12">
        <div class="alert alert-info text-center">Click on a quote to delete it</div>
      </div>
    </div>
  </main>
</template>

<script>
import QuoteGrid from "./components/quotes/QuotesGrid";
import NewQuote from "./components/quotes/NewQuote";
import Header from "./components/header/Header";

export default {
  data() {
    return {      
      quotes:  [],
      maxQuote: 10
    }
  },
  methods: {
    newQuote(x) {
      if (this.quotes.length >= this.maxQuote) {
        return alert('Please delete quote');
      } else {
        this.quotes.push(x);
      }
    },
    deleteQuote(i) {
      this.quotes.splice(i, 1);
    }
  },
  components: {
    "app-quote-grid": QuoteGrid,
    "app-new-quote": NewQuote,
    "app-header": Header
  }
}
</script>

<style>
</style>
