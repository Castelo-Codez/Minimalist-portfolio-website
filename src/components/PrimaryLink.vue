<script setup>
import {RouterLink} from "vue-router";
defineProps({
    content: String,
});
</script>
<template>
    <RouterLink role="link">
        {{ content }}
    </RouterLink>
</template>
<style lang="scss" scoped>
a {
    display: block;
    padding: 15px 40px;
    color: var(--clr-dark-gray);
    border: 1px solid var(--clr-dark-gray);
    width: fit-content;
    font-weight: 400;
    font-family: var(--sec-font);
    letter-spacing: 2px;
    transition: var(--main-transition);
    &:hover {
        box-shadow: 10px 8px 0px var(--clr-dark-gray);
    }
}
</style>
