const db = require('../models');
const Horario = db.Horario;

exports.list = async function(req, res) {
  try {
    const Horarios = await Horario.findAll({
      attributes: ['id','Dia', 'EspecialistaId', 'HoraId'],
    });
    res.json(Horarios);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const horario = await Horario.findOne(
      {
        where: {id: id},
        attributes: ['id','Dia', 'EspecialistaId', 'HoraId'],
      }
    );
    res.json(horario);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para filtrar los horarios con especialista
exports.fitro1 = async function(req, res) {
  try {
    const especialistaselect = req.params.especialista;
    const diaselect = req.params.dia;
    const horarios = await Horario.findAll({
      where:[{EspecialistaId:especialistaselect,Dia:diaselect}],
      attributes: ['id','Dia', 'EspecialistaId', 'HoraId'],
    });
    res.json(horarios);
  } catch(err) {
    res.status(500).json({error: err});
  }
}



// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoHorario = await Horario.create(req.body);
      res.json(nuevoHorario);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Horario.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Horario.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};