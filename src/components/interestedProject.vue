<script setup>
import Primarylink from "./PrimaryLink.vue";
</script>
<template>
    <section class="project-with-me" aria-label="interested sec">
        <div class="container" aria-label="container of elements">
            <ul role="list">
                <li role="listitem" aria-label="item 1">
                    <h3 role="heading" aria-level="3">
                        Interested in doing a project together?
                    </h3>
                </li>
                <li role="listitem" aria-label="item 2"></li>
                <li role="listitem" aria-label="item 3">
                    <Primarylink
                        content="contact Me"
                        role="link"
                        aria-label="contact page link"
                        to="/contact-me"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    padding: var(--main-padding-space) 0px;
    .container {
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            @media (min-width: 767.5px) {
                flex-direction: row;
                gap: 0;
                justify-content: space-between;
            }
            h3 {
                font-size: 2.3rem;
                color: var(--clr-dark-gray);
                text-align: center;
            }
            li {
                @media (min-width: 767.5px) {
                    &:nth-child(2) {
                        flex-basis: 39%;
                        background-color: #dfdede;
                        height: 1.5px;
                    }
                    &:nth-child(1) {
                        flex-basis: 30%;
                    }
                    &:nth-child(3) {
                        flex-shrink: 10%;
                    }
                }
            }
        }
    }
}
</style>
