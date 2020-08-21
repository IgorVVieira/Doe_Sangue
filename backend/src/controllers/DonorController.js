const Donor = require('../models/Donor');

module.exports = {
    async index(req, res) {
        const donors = await Donor.findAll();
        return res.json(donors);
    },

    async show(req, res) {
        const { id } = req.params;
        const donor = await Donor.findByPk(id);

        if (!donor) {
            return res.status(400).json({ error: 'Invalid donor Id' });
        }
        return res.json(donor);
    },

    async store(req, res) {
        const donor = await Donor.create(req.body);
        return res.json(donor);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, email, blood } = req.body;

        const donor = await Donor.update({
            name, email, blood,
        }, {
            returning: true,
            where: { id }
        });

        if (!donor) {
            return res.status(400).json({ error: 'User Id not found' });
        }
        return res.json(donor);
    },

    async delete(req, res) {
        const { id } = req.params;

        const donor = await Donor.destroy({
            where: {
                id,
            },
        });

        if (!donor) {
            return res.status(400).json({ error: 'User id not found' });
        }
        return res.status(200).send('ok');
    },
}