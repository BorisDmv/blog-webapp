<template>
  <!-- header starts -->
    <header class="navContainer">
        <div class='container container-flex'>
            <div class='site-title'>
                <h1 style="margin: 0;">Living The Social Life</h1>
                <p class="subtitle">A blog exploring minimalism in life.</p>
            </div>
            <nav>
                <ul>
                    <li><a href='#' class='current-page'>Home</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Recent Posts</a></li>
                </ul>
            </nav>
        </div>
    </header>
  <!-- header ends -->
</template>

<style scoped>
.navContainer {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

header {
    padding: 2em 0;
    text-align: center;
    font-family: sans-serif;
}

.container-flex {
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
}

h1,
h2,
h3 {
    font-family: 'Lora', serif;
    font-size: 2rem;
    font-weight: 400;
    margin-top: 0;
}

.subtitle {
    font-size: 0.85rem;
    font-weight: 700;
    margin: 0;
    color: #1792d2;
    letter-spacing: 0.05em;
    font-family: 'Ubuntu Bold', sans-serif;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

nav li {
    margin: 0 1em;
}

nav a {
    text-decoration: none;
    color: #707070;
    font-weight: 700;
    padding: 0.25em 0;
}

nav a:hover,
nav a:focus {
    color: #2b6bcc;
    border-bottom: 1px solid #2b6bcc;
    transition: .3s ease;
}

@media (max-width: 1000px) {
    .container {
        flex-direction: column;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav li {
        margin: 0.5em 0;
    }
}
</style>
