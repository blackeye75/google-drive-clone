const express = require('express');
const { body, validationResult } = require('express-validator')

const router = express.Router();


router.get('/register', (req, res) => {
    res.render('register');
})

router.post("/register", body('email').trim().isEmail(), body('password').trim().isLength({ min: 5 }), (req, res) => {
    console.log(req.body);
    res.send('register');

})

module.exports = router;