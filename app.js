import express from 'express';
import ViteExpress from 'vite-express';
import morgan from 'morgan';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const SAVED_FRIENDS = [
  { name: 'Beach Cat', picture: 'https://http.cat/images/301.jpg' },
  { name: 'Frisbee Dog', picture: 'https://www.platinumperformance.com/on/demandware.static/-/Library-Sites-PPSharedLibrary/default/dwdbd6f832/articles/og/og-disc-dogs.jpg' },
  { name: 'Wiener Dog', picture: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Short-haired-Dachshund.jpg' },
];

app.get('/api/friends', (req, res) => {
  res.json(SAVED_FRIENDS);
});

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
