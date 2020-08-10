const bloods = require('../models/Bloods');

module.exports = {
    checkTypeBlood(req, res, next) {
        const { blood } = req.body;

        if (bloods.indexOf(blood) === -1) {
            return res.status(400).json({ error: "Blood type are incorrect" });
        }
        next();
    },
}