function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
        .then(response => response.json())
        .then(data => {
            let joke = '';

            if (data.type === 'single') {
                joke = data.joke;
            } else if (data.type === 'twopart') {
                joke = `${data.setup} - ${data.delivery}`;
            }

            document.getElementById('joke').textContent = joke;
        })
        .catch(error => {
            document.getElementById('joke').textContent = 'Failed to load a joke. Please try again later!';
            console.error('Error fetching joke:', error);
        });
}

window.onload = fetchJoke;