const platos_db = require("../data/platosdb")

module.exports = {
    index : (req,res) => {
        return res.render('index', {
            platos : platos_db,
        })
    },

    detail : (req,res) => {

        let id = req.params.id;

        let plato = platos_db.find(plato => plato.id === +id)

     return res.render("detalleMenu", {
         plato,
     })
    }
}