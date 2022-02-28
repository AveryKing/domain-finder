import axios from 'axios';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.listen(8080, () => console.log('Express running, port 8080'));

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
const url = 'https://random-word-form.herokuapp.com/random/adjective/';
const words = [];

app.use('/find', (request, response) => {
    const rootWord = request.query.word;
  alphabet.forEach(letter => {
    axios.get(`${url  + letter}?count=1000`)
    .then(res => {
        res.data.forEach(word => {
            if(word.length < 6 && !words.includes(`${rootWord + word}`)) {
                words.push(`${rootWord + word}`)
            }
        })        
    })
})
response.json(words);

});
