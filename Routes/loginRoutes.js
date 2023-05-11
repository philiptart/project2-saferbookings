const express = require('express');
const router = express.router();

//route for login form 
router.get('/login'. (req, res) => {
    res.render('login', { pageTitle: 'login' });
});

//route for loginout
router.get('/logout', (req, res) => {
    res.redirect('/login');
});

module.exports = router;