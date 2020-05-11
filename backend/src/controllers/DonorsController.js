const bloods = require('../models/Bloods');
const Donors = require('../models/Donors');

module.exports = {
    async index(req, res) {
        const donors = await Donors.findAll();
        return res.json(donors);
    },

    async store(req, res) {
        const {
            name,
            email,
            blood
        } = req.body;
        if (bloods.indexOf(blood) === -1) {
            return res.send();
        }

        // Adiciona doadores do banco
        const donor = await Donors.create(req.body);
        return res.json(donor);
    },

    // async show(req, res) {
    //     // const blood = req.body.blood;
    //     const donors = await Donors.findAll({
    //         where: {
    //             blood: blood,
    //         },
    //     });
    //     const word = 'Doador';
    //     if (donors[0] === undefined) {
    //         return res.render('error', {
    //             blood,
    //             word,
    //         });
    //     }
    //     return res.render('donors', {
    //         donors
    //     });
    // },

    async delete(req, res) {
        await Donors.destroy({
            where: {},
            truncate: true,
        });
        return res.send();
    },

};