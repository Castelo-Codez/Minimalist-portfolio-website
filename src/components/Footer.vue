<script setup>
import {RouterLink} from "vue-router";
</script>
<template>
    <footer aria-label="footer">
        <div class="container">
            <ul role="list" aria-label="main-list">
                <li role="listitem" aria-label="navigation layer">
                    <ul role="list" aria-label="navigation list">
                        <li role="listitem" aria-label="logo">
                            <img
                                src="/public/logo-white.svg"
                                alt="logo"
                                role="img"
                                aria-label="logo img"
                            />
                        </li>
                        <li role="listitem" aria-label="Home page">
                            <RouterLink
                                role="link"
                                to="/"
                                aria-label="Home page link"
                            >
                                Home
                            </RouterLink>
                        </li>
                        <li role="listitem" aria-label="portfolio page">
                            <RouterLink
                                role="link"
                                to="/portfolio"
                                aria-label="portfolio page link"
                            >
                                portfolio
                            </RouterLink>
                        </li>
                        <li role="listitem" aria-label="contact me page">
                            <RouterLink
                                role="link"
                                to="/contact-me"
                                aria-label="contact page link"
                            >
                                contact me
                            </RouterLink>
                        </li>
                    </ul>
                </li>
                <li role="listitem" aria-label="social media layer">
                    <ul role="list" aria-label="social media list">
                        <li role="listitem" aria-label="github">
                            <a href="#" aria-label=" link" role="link">
                                <span class="linked-in icon" aria-hidden="true">
                                    <svg
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        fill="#ffffff"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>github [#fff142]</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs></defs>
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <g
                                                    id="Dribbble-Light-Preview"
                                                    transform="translate(-140.000000, -7559.000000)"
                                                    fill="#fff"
                                                >
                                                    <g
                                                        id="icons"
                                                        transform="translate(56.000000, 160.000000)"
                                                    >
                                                        <path
                                                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                            id="github-[#fff142]"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li role="listitem" aria-label="twitter">
                            <a href="#" aria-label="twitter link" role="link">
                                <span class="linked-in icon" aria-hidden="true">
                                    <svg
                                        width="30px"
                                        height="30px"
                                        viewBox="0 -2 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        fill="#ffffff"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>twitter [#fff154]</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs></defs>
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <g
                                                    id="Dribbble-Light-Preview"
                                                    transform="translate(-60.000000, -7521.000000)"
                                                    fill="#fff"
                                                >
                                                    <g
                                                        id="icons"
                                                        transform="translate(56.000000, 160.000000)"
                                                    >
                                                        <path
                                                            d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                                            id="twitter-[#fff154]"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li role="listitem" aria-label="linked in">
                            <a href="#" aria-label=" link" role="link">
                                <span class="linked-in icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    padding: 15px 0px;
    background-color: var(--clr-dark-gray);
    font-family: var(--sec-font);
    .container {
        > ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            @media (min-width: 991.5px) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            > li {
                &:nth-child(2) {
                    ul {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        column-gap: 10px;
                    }
                }
                &:nth-child(1) {
                    ul {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
                        @media (min-width: 991.5px) {
                            flex-direction: row;
                            gap: 40px;
                            align-items: center;
                        }
                        li {
                            img {
                                width: 100%;
                                height: 100%;
                            }
                            a {
                                color: #fff;
                                text-transform: uppercase;
                                font-size: 14.5px;
                                font-weight: 400;
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
            }
        }
    }
}
</style>
