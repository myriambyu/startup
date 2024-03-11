const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

apiRouter.get('/storedProgress', (_req, res) => {
    res.send(storedProgress);
});
  

  // SubmitProgress
apiRouter.post('/storedProgress', (req, res) => {
    storedProgress = updateProgress(req.body);
    res.send(storedProgress);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let storedProgress = null;

function updateProgress(newScore) {
  if (storedProgress === null || newScore > storedProgress) {
    storedProgress = newScore;
  }
  
  return storedProgress;
}

