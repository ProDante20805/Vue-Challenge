<template>
    <div class="row">
        <app-quote></app-quote>
    </div>
</template>

<script>
import Quote from "./Quote"

export default {
    props: {
        quot: {
            type: String
        }
    },
    components: {
        "app-quote": Quote
    }
}
</script>

<style>

</style>
