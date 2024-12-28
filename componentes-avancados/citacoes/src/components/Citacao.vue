<template>
    <div class="citacao">
        <p>{{ fonte }}</p>
        <p>{{ texto }}</p>
        <p>{{ autor }}</p>
    </div>
</template>

<script>
export default {
    props: {
        fonte: String,
        autor: String,
        texto: String
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
