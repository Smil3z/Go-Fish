const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const journalRouter = require("./routes/journal.router");
const detailsRouter = require("./routes/details.router");
const editingRouter = require("./routes/editing.router");
const addingRouter = require("./routes/adding.router");
const deleteRouter = require("./routes/delete.router")

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/journal', journalRouter);
app.use('/api/details', detailsRouter);
app.use('/api/editing', editingRouter);
app.use('/api/adding', addingRouter);
app.use('/api/delete', deleteRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
