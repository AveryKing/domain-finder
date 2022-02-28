document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const rootWord = document.querySelector('#root').value;
    fetch(`http://127.0.0.1:8080/find?word=${rootWord}`)
    .then(res => res.json())
    .then(data => data.forEach(word => {
            const li = document.createElement('li');
            li.innerText = word;
            document.querySelector('#results').appendChild(li);
        })
    )

})