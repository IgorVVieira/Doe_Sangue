const Donors = require('../models/Donors');

module.exports = {

    async index(req, res) {
        const donors = await Donors.findAll();
        return res.json(donors);
    },

    async store(req, res) {
        const {
            blood
        } = req.body;

        const donor = await Donors.create(req.body);
        return res.json(donor);
    },

    async delete(req, res) {
        await Donors.destroy({
            where: {},
            truncate: true,
        });
        return res.send();
    },
};