// app.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

const moments = [
  { image: 'moment1.jpg', text: 'Our first meet was unforgettable.' },
  { image: 'moment2.jpg', text: 'The first hug that said it all.' },
  { image: 'moment3.jpg', text: 'Late night talks under the stars.' },
  { image: 'moment4.jpg', text: 'That first silly selfie together.' },
  { image: 'moment5.jpg', text: 'Holding hands in silence, yet loud.' },
  { image: 'moment6.jpg', text: 'Our first festival together.' },
  { image: 'moment7.jpg', text: 'Dancing in the rain, laughing hard.' },
  { image: 'moment8.jpg', text: 'That one perfect sunset.' },
  { image: 'moment9.jpg', text: 'Every smile carved into memory.' },
  { image: 'moment10.jpg', text: 'Our forever begins here.' }
];

app.get('/', (req, res) => {
  res.render('index', { moments });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
