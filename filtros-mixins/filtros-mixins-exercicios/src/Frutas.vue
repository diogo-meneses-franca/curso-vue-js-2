<template>
    <div>
        <ul>
            <li v-for="f in frutas" :key="f">{{ f }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="addFruta">
    </div>
</template>

<script>
import FrutasMixin from './FrutasMixin';
export default {
    mixins: [FrutasMixin],
}

</script>

<style>

</style>