const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';


const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

apiRouter.get('/storedProgress', (_req, res) => {
    res.send(storedProgress);
});
  

  // SubmitProgress
apiRouter.post('/storedProgress', (req, res) => {
    const newScore = req.body;
    storedProgress = updateProgress(newScore);
    res.send(storedProgress);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function updateProgress(newScore) {
  if (storedProgress === null || newScore > storedProgress) {
    storedProgress = newScore;
  }
  
  return storedProgress;
}

