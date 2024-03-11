const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://v2.jokeapi.dev/joke/Any', config);

    const data = await res.json()

    jokeEl.innerHTML = data.joke

}