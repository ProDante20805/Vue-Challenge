<template>
    <div class="row mt-2 mb-2">
        <div class="col-12">
            <h1 class="text-center">Quotes Added</h1>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{width: (quoteCount / quoteMax)  * 100 + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ quoteCount }} / {{ quoteMax }}</div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quoteCount: {
            type: Number
        },
        quoteMax: {
            type: Number
        }
    }
}
</script>

<style>

</style>
