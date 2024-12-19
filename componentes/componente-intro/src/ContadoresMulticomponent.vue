<template>
    <div class="contadores">
        <app-contador v-for="index in 5" :key="index"/>
        <button>Teste</button>
    </div>
</template>

<script>
    import ContadorComponent from './ContadorComponent.vue'
    export default {
        components: { 'app-contador': ContadorComponent }
    }
</script>

<style>

</style>