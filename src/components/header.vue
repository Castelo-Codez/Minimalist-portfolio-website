<script setup>
import {RouterLink} from "vue-router";
import {ref, computed, onMounted} from "vue";
const $navMobileState = ref(false);
const classObj = computed(() => {
    return {
        active: $navMobileState.value,
    };
});
function showMobileNav(e) {
    e.stopPropagation();
    return ($navMobileState.value = !$navMobileState.value);
}

onMounted(() => {
    window.addEventListener("click", (e) => [($navMobileState.value = false)]);
});
</script>
<template>
    <header role="banner" aria-label="header">
        <div class="container" aria-label="container of elements">
            <RouterLink
                role="link"
                tabindex="-1"
                aria-label="home page link"
                to="/"
            >
                <div class="image-container" aria-label="image container">
                    <img
                        src="/public/logo.svg"
                        alt="logo"
                        aria-label="logo img"
                        role="img"
                    />
                </div>
            </RouterLink>
            <nav role="navigation" aria-label="navigation links">
                <ul role="list" aria-label="list container">
                    <li role="listitem" aria-label="Home page item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li role="listitem" aria-label="portfolio page item">
                        <RouterLink to="/portfolio">portfolio</RouterLink>
                    </li>
                    <li role="listitem" aria-label="contact me page item">
                        <RouterLink to="contact-me">contact me</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="mobile-nav" aria-label="mobile navigation container">
                <button
                    role="button"
                    type="button"
                    aria-label="navigation link button"
                    :aria-expanded="$navMobileState"
                    aria-controls="navigation-links"
                    @click="showMobileNav"
                >
                    <span class="icon" aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="13"
                        >
                            <g fill="#33323D" fill-rule="evenodd">
                                <path
                                    d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"
                                />
                            </g>
                        </svg>
                    </span>
                </button>
                <nav
                    role="navigation"
                    aria-label="navigation links"
                    :aria-hidden="!$navMobileState"
                    :class="classObj"
                    id="navigation-links"
                    @click="(e) => e.stopPropagation()"
                >
                    <ul role="list" aria-label="list container">
                        <li role="listitem" aria-label="Home page item">
                            <RouterLink
                                to="/"
                                role="link"
                                aria-label="home link"
                                >Home</RouterLink
                            >
                        </li>
                        <li role="listitem" aria-label="portfolio page item">
                            <RouterLink
                                to="/portfolio"
                                role="link"
                                aria-label="portfolio link"
                                >portfolio</RouterLink
                            >
                        </li>
                        <li role="listitem" aria-label="contact me page item">
                            <RouterLink
                                to="contact-me"
                                role="link"
                                aria-label="contact with me link"
                                >contact me</RouterLink
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
%active-state {
    &::before {
        opacity: 1;
        margin-left: -25px;
    }
}
header {
    padding: 50px 0px;
    .container {
        font-family: var(--sec-font);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .image-container {
            img {
                width: 100%;
                height: 100%;
            }
        }
        > nav {
            display: none;
            @media (min-width: 991.5px) {
                display: block;
            }
            ul {
                display: flex;
                column-gap: 50px;
                li {
                    a {
                        color: var(--clr-dark-gray);
                        text-transform: uppercase;
                        font-size: 14.5px;
                        font-weight: 700;
                        transition: var(--main-transition);
                        &:hover {
                            color: var(--clr-text-2);
                        }
                        &.router-link-active {
                            color: var(--clr-text-2);
                        }
                    }
                }
            }
        }
        .mobile-nav {
            @media (min-width: 991.5px) {
                display: none;
            }
            button {
                background: none;
                border: none;
                cursor: pointer;
            }
            nav {
                position: absolute;
                top: calc(100% + 20px);
                left: 50%;
                transform: translateX(-50%);
                padding: 10px;
                background-color: var(--clr-dark-gray);
                border-radius: var(--main-radius);
                width: 95%;
                z-index: 111111;
                @media (min-width: 767.5px) {
                    width: 200px;
                    transform: translateX(0);
                    left: 71%;
                }
                ul {
                    li {
                        &:not(:last-child) {
                            margin-bottom: 20px;
                        }
                        a {
                            color: var(--clr-text-1);
                            display: block;
                            text-align: center;
                            text-transform: uppercase;
                            font-family: "public-sans";
                            font-weight: 300;
                            transition: var(--main-transition);
                            font-size: 15px;
                            position: relative;
                            &::before {
                                position: absolute;
                                content: ">";
                                color: var(--clr-text-1);
                                margin-left: -15px;
                                display: inline-block;
                                top: 50%;
                                transform: translateY(-50%);
                                font-size: 18px;
                                opacity: 0;
                                transition: var(--main-transition);
                            }

                            &:hover {
                                @extend%active-state;
                            }
                            &.router-link-active {
                                @extend%active-state;
                            }
                        }
                    }
                }
                display: none;
                &.active {
                    display: block;
                    animation: show 0.2s ease-in-out;
                }
                @keyframes show {
                    0% {
                        opacity: 0;
                        visibility: hidden;
                    }
                    100% {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
}
</style>
