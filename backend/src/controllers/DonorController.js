const Donor = require('../models/Donor');

module.exports = {
    async index(req, res) {
        const donors = await Donor.findAll();
        return res.json(donors);
    },

    async store(req, res) {
        // const {
        //     blood
        // } = req.body;
        const donor = await Donor.create(req.body);
        return res.json(donor);
    },

    async delete(req, res) {
        await Donor.destroy({
            where: {},
            truncate: true,
        });
        return res.send();
    },
};