function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,racist,sexist')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = '';
            document.getElementById('setup').innerText = '';
            document.getElementById('delivery').innerText = '';

            if (data.type === 'single') {
                document.getElementById('joke').innerText = data.joke;
            } else if (data.type === 'twopart') {
                document.getElementById('setup').innerText = data.setup;
                document.getElementById('delivery').innerText = data.delivery;
            }
            
            document.getElementById('jokeContainer').style.display = 'block';

            setTimeout(() => {
                document.getElementById('jokeContainer').style.display = 'none';
            }, 5000);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });    
}

export const Sifbot = () => {
    const handleClick = () => {
        getJoke();
        setTimeout(() => {
            document.getElementById('jokeContainer').style.display = 'none';
        }, 5000);
    };

    return (
        <div className="sif">
            <h3>SIFBOT</h3>
            <img src="./images/sif.png" alt="sif" onClick={handleClick} />
            <div id="jokeContainer">
                <p id="joke"></p>
                <p id="setup"></p>
                <p id="delivery"></p>
            </div>
        </div>
    );
}