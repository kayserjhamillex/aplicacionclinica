const db = require('../models');
const Hora = db.Hora;

exports.list = async function(req, res) {
  try {
    const Horas = await Hora.findAll();
    res.json(Horas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const hora = await Hora.findOne({where: {id: id},
      attributes: ['Horainicio', 'Horafin']});
    res.json(hora);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoHora = await Hora.create(req.body);
      res.json(nuevoHora);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Hora.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Hora.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
