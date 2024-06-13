const express = require('express');
const authRoutes = require('./router/authRouter');
const cookieParser = require('cookie-parser');
const { requireToken, checkUser } = require('./middleware/authMiddleware');


const app = express();

// middleware
app.use(express.static('public'));

app.use(express.json());

app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');


// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireToken,(req, res) => res.render('smoothies'));
app.use(authRoutes);

app.get('/set-cookie', (req, res) => {
    // res.setHeader('Set-Cookie', 'newUser=ture');
    res.cookie('newUser', true);
    res.cookie('isEmployee', false, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
    res.send('seted cookie');
});
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.json(req.cookies);
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));