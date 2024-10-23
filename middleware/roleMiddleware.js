const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).send('Token missing');

    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        next();
    });
};
