<template>
    <div class="row mt-2 mb-2">
        <app-quote v-for="q in quotes" :key="q.id" @click.native="deleteQuote">{{ q }}</app-quote>
    </div>
</template>

<script>
import Quote from "./Quote"

export default {
    props: {
        quotes: {
            type: Array
        }
    },
    methods: {
        deleteQuote() {
            this.$emit("quoteDeleted", this.id);
        }
    },
    components: {
        "app-quote": Quote
    }
}
</script>

<style>

</style>
