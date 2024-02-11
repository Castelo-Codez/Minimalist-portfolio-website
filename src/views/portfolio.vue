<script setup>
import {ref} from "vue";
import data from "../../data.json";
import primaryLink from "../components/PrimaryLink.vue";
const $arrayOfData = ref(data);
const $index = ref(1);

const $currentElement = ref($arrayOfData.value[$index.value - 1]);
const $prevElement = ref($arrayOfData.value[$arrayOfData.value.length - 1]);
const $nextElement = ref($arrayOfData.value[$index.value + 1 - 1]);

function $setNextNum() {
    $index.value++;
    if ($index.value > $arrayOfData.value.length) {
        $index.value = 1;
    }
    $getCurrentElement();
}
function $setPrevNum() {
    $index.value--;
    if ($index.value < 1) {
        $index.value = $arrayOfData.value.length;
    }
    $getCurrentElement();
}
function $getCurrentElement() {
    $currentElement.value = $arrayOfData.value[$index.value - 1];
    $nextElement.value =
        $index.value === $arrayOfData.value.length
            ? ($nextElement.value = $arrayOfData.value[1 - 1])
            : ($nextElement.value = $arrayOfData.value[$index.value + 1 - 1]);
    $prevElement.value =
        $index.value === 1
            ? ($prevElement.value =
                  $arrayOfData.value[$arrayOfData.value.length - 1])
            : ($prevElement.value = $arrayOfData.value[$index.value - 1 - 1]);
}
</script>
<template>
    <main aria-label="Portfolio page" role="main">
        <div aria-label="content-container" class="container" :key="$index">
            <section class="banner" aria-label="banner of project">
                <div class="image-holder" aria-label="image holder">
                    <img
                        :src="`/portfolio/${$currentElement.imgHero}`"
                        :alt="$currentElement.title + 'logo'"
                    />
                </div>
            </section>
            <section :aria-label="`peoject ${$index} info section`">
                <ul role="list" aria-label="list info">
                    <li role="listitem" aria-label="layer 1 main info">
                        <article class="text" aria-label="content holder">
                            <h3 role="heading" aria-level="3">
                                {{ $currentElement.title }}
                            </h3>
                            <p aria-label="infos">
                                {{ $currentElement.infos }}
                            </p>
                            <span aria-label="project type" role="contentinfo">
                                {{ $currentElement.type }}
                            </span>

                            <ul role="list" aria-label="list of technos">
                                <li
                                    v-for="(
                                        value, index
                                    ) in $currentElement.technos"
                                    :key="index"
                                    role="listitem"
                                    :aria-label="value"
                                >
                                    {{ value }}
                                </li>
                            </ul>
                            <primaryLink
                                role="link"
                                aria-label="project link"
                                content="visit website"
                                to="#"
                            />
                        </article>
                    </li>

                    <li role="listitem" aria-label="layer 2 description info">
                        <ul role="list" aria-label="sec info list">
                            <li role="listitem" aria-label="layer 1">
                                <article
                                    role="article"
                                    aria-label="description article"
                                >
                                    <h3 role="heading" aria-level="3">
                                        project background
                                    </h3>
                                    <p aria-label="project description">
                                        {{ $currentElement.description }}
                                    </p>
                                </article>
                            </li>
                            <li aria-label="layer 2" role="listitem">
                                <h3 role="heading" aria-label="3">
                                    static previews
                                </h3>
                                <ul role="list" aria-label="previews list">
                                    <li
                                        role="listitem"
                                        aria-label="static preview layer"
                                    >
                                        <img
                                            :src="
                                                '/portfolio/' +
                                                $currentElement.preview1
                                            "
                                            :alt="
                                                $currentElement.title +
                                                'preview'
                                            "
                                        />
                                    </li>
                                    <li
                                        role="listitem"
                                        aria-label="static preview layer"
                                    >
                                        <img
                                            :src="
                                                '/portfolio/' +
                                                $currentElement.preview2
                                            "
                                            :alt="
                                                $currentElement.title +
                                                'preview'
                                            "
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
        <ul
            role="list"
            aria-label="controls butttons"
            class="container"
            id="controls"
        >
            <li role="listitem" aria-label="previous">
                <button
                    @click="$setPrevNum"
                    aria-label="previous project button"
                    type="button"
                    role="button"
                >
                    <span class="icon" aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="16"
                        >
                            <path
                                fill="none"
                                stroke="#33323D"
                                d="M9 0L1 8l8 8"
                            />
                        </svg>
                    </span>
                    <article aria-hidden="true" class="prev-project">
                        <span class="prev-project">{{
                            $prevElement.title
                        }}</span>
                        <span>previous project</span>
                    </article>
                </button>
            </li>
            <li role="listitem" aria-label="Next">
                <button
                    @click="$setNextNum"
                    aria-label="Next project button"
                    type="button"
                    role="button"
                >
                    <span class="icon" aria-hidden="true">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="16"
                        >
                            <path
                                fill="none"
                                stroke="#33323D"
                                d="M1 0l8 8-8 8"
                            />
                        </svg>
                    </span>
                    <article aria-hidden="true" class="next-project">
                        <span class="Next-project">{{
                            $nextElement.title
                        }}</span>
                        <span>Next project</span>
                    </article>
                </button>
            </li>
        </ul>
    </main>
</template>
<style scoped lang="scss">
main {
    overflow: hidden;

    .container:first-child {
        animation: show 0.2s linear;
        @keyframes show {
            0% {
                opacity: 0;
                visibility: hidden;
                transform: translateX(100px);
            }
            100% {
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
            }
        }
        img {
            border-radius: var(--main-radius);
            width: 100%;
            height: 100%;
        }
        section.banner {
            .image-holder {
                max-height: 500px;
                overflow: hidden;
            }
        }
        section:nth-child(2) {
            padding: var(--main-padding-space) 0px;
            > ul {
                width: 100%;
                display: grid;
                row-gap: 40px;
                grid-template-columns: 1fr;
                @media (min-width: 991.5px) {
                    grid-template-columns: 400px 1fr;
                    justify-content: space-between;
                    gap: 150px;
                }
            }
            li {
                > *:not(:last-child) {
                    margin-bottom: 50px;
                }
                &:first-child {
                    margin-bottom: 50px;
                    article.text {
                        padding: 30px 0px;
                        border-top: 2px solid var(--border-Clr);
                        border-bottom: 2px solid var(--border-Clr);
                        > *:not(:last-child) {
                            margin-bottom: 20px;
                        }
                        > *:not(:first-child) {
                            font-family: var(--sec-font);
                        }
                        h3 {
                            font-size: 2.8rem;
                            color: var(--clr-dark-gray);

                            & + p {
                                color: var(--Clr-paragraph);
                                font-size: 16px;
                                line-height: 1.8;
                                font-weight: 500;

                                & + span {
                                    color: var(--clr-text-2);
                                    display: block;

                                    font-size: 1rem;
                                    font-weight: 600;
                                    & + ul {
                                        display: flex;

                                        li {
                                            color: var(--clr-text-2);
                                            font-weight: 600;
                                            position: relative;
                                            &:not(:last-child) {
                                                &::after {
                                                    content: "/";
                                                    color: inherit;
                                                    margin-left: 5px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                &:last-child {
                    h3 {
                        text-transform: capitalize;
                        color: var(--clr-dark-gray);
                        font-size: 2rem;
                        font-weight: 100;
                        & + p {
                            color: var(--Clr-paragraph);
                            font-size: 16px;
                            line-height: 1.8;
                            font-weight: 500;
                            font-family: var(--sec-font);
                        }
                    }
                    article {
                        > *:not(:last-child) {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
}
#controls.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    @media (min-width: 575.5px) {
        flex-direction: row;
        &::after {
            content: "";
            position: absolute;
            background-color: var(--border-Clr);
            width: 2px;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    li {
        flex: 1;
        padding: 40px 0px;
        border-top: 2px solid var(--border-Clr);
        border-bottom: 2px solid var(--border-Clr);
        button {
            display: flex;
            column-gap: 20px;
            align-items: center;
            width: 100%;
            background: none;
            cursor: pointer;
            border: none;
            article {
                span {
                    display: block;
                }
                span:first-child {
                    color: var(--clr-dark-gray);
                    font-size: 30px;
                    font-weight: 700;
                    margin-bottom: 13px;
                    & + span {
                        color: #abaaaa;
                        font-size: 18px;
                        font-family: var(--sec-font);
                        text-transform: capitalize;
                    }
                }
            }
        }
        &:nth-child(2) {
            button {
                justify-content: flex-end;
                .icon {
                    order: 5;
                }
            }
        }
    }
}
</style>
