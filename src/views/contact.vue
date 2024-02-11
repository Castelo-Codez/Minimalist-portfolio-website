<script setup>
import {ref} from "vue";
import validator from "validator";
const $Name = ref("");
const $email = ref("");
const EmailError = ref(false);
const NameError = ref(false);
const NameErrorMsg = ref("");
function onSubmit() {
    if ($Name.value.length <= 6) {
        NameErrorMsg.value = "Name Must be At least 8 characters";
        NameError.value = true;
    } else {
        NameError.value = !/[A-Za-z0-9]/gi.test($Name.value);
    }
    EmailError.value = !validator.isEmail($email.value);
}
</script>
<template>
    <main role="main" aria-label="contact page">
        <section aria-label="sec 1">
            <div class="container" aria-label="container of elements">
                <h3 role="heading" aria-level="3">Get in Touch</h3>
                <article role="article" aria-label="Get In touch ">
                    <p aria-label="paragraph">
                        I’d love to hear about what you’re working on and how I
                        could help. I’m currently looking for a new role and am
                        open to a wide range of opportunities. My preference
                        would be to find a position in a company in London. But
                        I’m also happy to hear about opportunites that don’t fit
                        that description. I’m a hard-working and positive person
                        who will always approach each task with a sense of
                        purpose and attention to detail. Please do feel free to
                        check out my online profiles below and get in touch
                        using the form.
                    </p>
                    <ul role="list" aria-label="social media list">
                        <li role="listitem" aria-label="github">
                            <a href="#" aria-label=" link" role="link">
                                <span class="icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="24"
                                    >
                                        <path
                                            fill="#33323D"
                                            d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li role="listitem" aria-label="twitter">
                            <a href="#" aria-label="twitter link" role="link">
                                <span class="icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="20"
                                    >
                                        <path
                                            fill="#33323D"
                                            d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li role="listitem" aria-label="linked in">
                            <a href="#" aria-label=" link" role="link">
                                <span class="icon" aria-hidden="true">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="#33323D"
                                            d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
        <section aria-label="sec 2">
            <div class="container" aria-label="container of elements">
                <h3 role="heading" aria-level="3">Contact me</h3>
                <form
                    role="form"
                    aria-label="submit to contact me"
                    @submit.prevent="onSubmit"
                >
                    <div
                        class="Name-input-container"
                        aria-label="name input container"
                    >
                        <label for="Name" aria-label="label for Name input">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="Name"
                            autocomplete="off"
                            autofocus
                            aria-label="Name input"
                            placeholder="jane Appleseed"
                            v-model="$Name"
                            v-bind="{error: NameError}"
                            required
                        />
                        <span
                            class="error-msg"
                            aria-label="Name error"
                            :aria-hidden="!NameError"
                            v-if="NameError"
                            >{{ NameErrorMsg }}</span
                        >
                    </div>
                    <div class="Email-input-container">
                        <label for="Email" aria-label="label for Email input">
                            Email
                        </label>
                        <input
                            type="email"
                            autocomplete="off"
                            id="Email"
                            name="email"
                            placeholder="example@example.com"
                            required
                            v-model="$email"
                            v-bind="{error: EmailError}"
                        />
                        <span
                            class="error-msg"
                            aria-label="email error"
                            :aria-hidden="!EmailError"
                            v-if="EmailError"
                            >Please Enter A valid Email</span
                        >
                    </div>
                    <div class="Message-input-container">
                        <label
                            for="Message"
                            aria-label="label for Message input"
                        >
                            Message
                        </label>
                        <textarea
                            autocomplete="off"
                            id="Message"
                            name="Message"
                            placeholder="how can i help you?"
                        />
                    </div>
                    <button
                        type="submit"
                        role="button"
                        aria-label="submit button"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
main {
    section {
        h3 {
            color: var(--clr-dark-gray);
            font-size: 3rem;
            font-weight: 600;
            text-transform: capitalize;
        }
        .container {
            padding-top: 30px;
            padding-bottom: 30px;
            border-top: 3px solid var(--border-Clr);
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 30px;
            @media (min-width: 767.5px) {
                grid-template-columns: 1fr 1fr;
                column-gap: 30px;
            }
        }
    }
    section:first-child {
        .container {
            article {
                p {
                    color: var(--Clr-paragraph);
                    font-size: 18px;
                    font-family: var(--sec-font);
                    line-height: 1.6;
                    margin-bottom: 30px;
                    & + ul {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        column-gap: 10px;
                        @media (min-width: 767.5px) {
                            justify-content: flex-start;
                        }
                    }
                }
            }
        }
    }
    section:last-child {
        form {
            font-family: var(--sec-font);
            > div {
                &:not(:last-child) {
                    margin-bottom: 30px;
                }
                > * {
                    display: block;
                    width: 100%;
                }
                label {
                    margin-bottom: 10px;
                    color: var(--clr-dark-gray);
                    font-weight: 700;
                    font-size: 15px;
                    & + input,
                    & + textarea {
                        padding: 12px 12px 20px;
                        border: none;
                        font-size: 14px;
                        background-color: #e6e6e7;
                        &::placeholder {
                            text-transform: capitalize;
                        }
                        &:focus {
                            outline-color: var(--clr-text-2);
                        }
                        & + .error-msg {
                            display: block;
                            color: red;
                            margin-top: 8px;
                            padding-left: 10px;
                            text-transform: capitalize;
                            font-size: 14px;
                            opacity: 0;
                            transition: var(--main-transition);
                        }
                        &[error="true"] {
                            border: 1px solid red;
                            & + .error-msg {
                                opacity: 1;
                            }
                        }
                    }
                    & + textarea {
                        resize: none;
                    }
                }
            }
            button {
                display: block;
                width: fit-content;
                padding: 15px 30px;
                background-color: #354d5d;
                color: var(--clr-text-1);
                border: none;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                cursor: pointer;
            }
        }
    }
}
</style>
