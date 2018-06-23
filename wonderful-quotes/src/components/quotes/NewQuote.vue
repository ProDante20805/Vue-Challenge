<template>
    <div class="row mt-2 mb-2">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 col-lg-12 col-lg-offset-6 mx-auto form-group">
            <label for="areaText">Quote:</label>
            <textarea name="" id="areaTex" rows="3" class="form-control" v-model="quoteLink"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group  mt-2">
            <button class="btn btn-primary" @click.prevent="addNew">Add quote</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quoteLink: ""
        }
    },
    methods: {
        addNew() {
            this.$emit("quoteAdded", this.quoteLink);
            this.quoteLink = ""
        }
    }
}
</script>

<style>

</style>
