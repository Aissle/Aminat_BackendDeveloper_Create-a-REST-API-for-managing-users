//Register a new user
const bcrypt = require('bcryptjs');
const User = require('./models/User');

app.post('/register', async (req, res) => {
    const {name, email, password, role} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({name, email, password: hashedPassword, role});
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).Json({error: err.message});
    }
});