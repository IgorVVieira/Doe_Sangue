const Donor = require('../models/Donor');

module.exports = {
    async index(req, res) {
        const donors = await Donor.findAll();
        return res.json(donors);
    },

    async store(req, res) {
        const donor = await Donor.create(req.body);
        return res.json(donor);
    }
}