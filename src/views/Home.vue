<script setup>
import Primarylink from "../components/Primarylink.vue";
</script>
<template>
    <main aria-label="Home page" role="main">
        <section aria-label="sub section introduction ">
            <div class="container" aria-label="container of elements">
                <div class="image" aria-label="box of img">
                    <img
                        src="/public/home/image-homepage-hero.webp"
                        alt="intro-image"
                        role="img"
                        aria-label="img"
                    />
                </div>
                <article role="contentinfo" aria-label="main article">
                    <h1 role="heading" aria-level="1">
                        Hey, I’m Alex Spencer and I love building beautiful
                        websites
                    </h1>
                    <a href="#about-me" role="link" aria-label="info about me">
                        <span aria-hidden="true">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="14"
                            >
                                <g
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke="#5FB4A2"
                                >
                                    <path d="M0 9l8 4 8-4" />
                                    <path opacity=".5" d="M0 5l8 4 8-4" />
                                    <path opacity=".25" d="M0 1l8 4 8-4" />
                                </g>
                            </svg>
                        </span>
                        <span aria-label="link text"> about me </span>
                    </a>
                </article>
            </div>
        </section>
        <section aria-label="sub section about me">
            <div class="container" aria-label="container of element">
                <div class="image-container" aria-label="imag container ">
                    <img
                        src="/public/home/image-homepage-profile.webp"
                        alt="hero-page"
                        role="img"
                        aria-label="img"
                    />
                </div>
                <article role="article" aria-label="article about my self">
                    <div
                        class="text"
                        id="about-me"
                        aria-label="content wrapper"
                    >
                        <h2 role="heading" aria-level="2">About Me</h2>
                        <p aria-label="paragraph">
                            I’m a junior front-end developer looking for a new
                            role in an exciting company. I focus on writing
                            accessible HTML, using modern CSS practices and
                            writing clean JavaScript. When writing JavaScript
                            code, I mostly use React, but I can adapt to
                            whatever tools are required. I’m based in London,
                            UK, but I’m happy working remotely and have
                            experience in remote teams. When I’m not coding,
                            you’ll find me outdoors. I love being out in nature
                            whether that’s going for a walk, run or cycling. I’d
                            love you to check out my work.
                        </p>
                        <Primarylink
                            content="Go To Portfolio"
                            to="/portfolio"
                            role="link"
                            aria-label="portfolio page link"
                        />
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
main {
    section:nth-child(1) {
        .container {
            position: relative;
            .image {
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: var(--main-radius);
                }
            }
            article {
                background-color: var(--clr-text-1);
                padding: 20px;

                @media (min-width: 991.5px) {
                    position: absolute;
                    max-width: 40%;
                    left: 14px;
                    bottom: 0.5%;
                }
                h1 {
                    color: var(--clr-dark-gray);
                    font-size: 2.5rem;
                    @media (min-width: 991.5px) {
                        font-size: 3vw;
                    }
                    font-weight: 800;
                    & + a {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 15px 25px;
                        width: 11rem;
                        background-color: var(--bg-darkGreen);
                        color: var(--clr-text-1);
                        text-transform: uppercase;
                        font-family: var(--sec-font);
                        font-size: 13px;
                    }
                }
            }
        }
    }
    section:nth-child(2) {
        padding: var(--main-padding-space) 0px;
        .container {
            display: flex;
            flex-direction: column;
            @media (min-width: 992.5px) {
                flex-direction: row;
                > * {
                    flex-basis: 50%;
                }
            }
            gap: 20px;
            .image-container {
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: var(--main-radius);
                    filter: grayscale(100%);
                    transition: var(--main-transition);
                    height: auto;
                    &:hover {
                        filter: grayscale(0);
                    }
                }
            }
            article {
                --main-space: 30px;
                padding: 20px;
                .text {
                    @media (min-width: 1199.5px) {
                        width: 75%;
                        margin: auto;
                        padding: 30px 20px;
                    }

                    position: relative;
                    h2 {
                        font-size: 3rem;
                        color: var(--clr-dark-gray);
                        margin-bottom: var(--main-space);
                        & + P {
                            line-height: 1.6;
                            font-size: 18px;
                            font-weight: 300;
                            color: var(--Clr-paragraph);

                            font-family: var(--sec-font);
                            & + a {
                                display: block;
                                padding: 15px 40px;
                                color: var(--clr-dark-gray);
                                border: 1px solid var(--clr-dark-gray);
                                width: fit-content;
                                font-weight: 400;
                                font-family: var(--sec-font);
                                letter-spacing: 2px;
                                margin-top: var(--main-space);
                            }
                        }
                    }
                    &::after,
                    &::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background-color: #f5f5f5;
                        transform: translateX(-50%);
                        left: 50%;
                    }
                    &::before {
                        top: -30px;
                    }
                    &::after {
                        bottom: -30px;
                    }
                }
            }
        }
    }
}
</style>
