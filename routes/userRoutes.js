
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/User');

const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) return res.status(403).send('Token missing');

    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        if (user.role !== 'Admin') return res.status(403).send('Admins only');
        req.user = user;
        next();
    });
};

//fetching users
router.get('/users', verifyAdmin, async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {
        const users = await User.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//update user
router.put('/users/:id', verifyAdmin, async (req, res) => {
    const { name, email, role } = req.body;

    try {
        const user = await User.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//delete user
router.delete('/users/:id', verifyAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;