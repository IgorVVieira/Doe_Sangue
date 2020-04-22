const bloods = require('../models/Bloods');
const Donors = require('../models/Donors');

module.exports = {
    async index(req, res, result) {
        const donors = await Donors.findAll();
        return res.render('index', {
            donors
        });
    },

    async insert(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const blood = req.body.blood;

        // Verifica se o tipo sanguíneo está incorreto
        if (bloods.indexOf(blood) === -1) {
            return res.send('O tipo sanguíneo está incorreto');
        }

        // Adiciona doadores do banco
        const donor = await Donors.create({
            name,
            email,
            blood,
        });
        return res.redirect('/');
    },

    async delete(req, res) {
        await Donors.destroy({
            where: {},
            truncate: true
        });
        return res.redirect('/');
    },
};