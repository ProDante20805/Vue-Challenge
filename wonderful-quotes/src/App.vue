<template>
  <main class="container">
    <app-quote-grid :for="quote in quotes" :quot="quotes">{{ quote }}</app-quote-grid>
  </main>
</template>

<script>
import QuoteGrid from "./components/quotes/QuotesGrid"

export default {
  quotes = ["Hello i'm a quote"],
  components: {
    "app-quote-grid": QuoteGrid
  }
}
</script>

<style>
</style>
