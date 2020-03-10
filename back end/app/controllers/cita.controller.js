const db = require('../models');
const Cita = db.Cita;

exports.list = async function(req, res) {
  try {
    const Citas = await Cita.findAll({
      attributes: ['id','Fechacita','Pago', 'AdminId', 'PacienteId', 'HorarioId'],
    });
    res.json(Citas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const Cita = await Cita.findOne(
      {
        where: {id: id},
        include: [
          { model: db.Admin, attributes: ['Fullname']},
          { model: db.Paciente, attributes: ['Fullname']},
          { model: db.Horario, attributes: ['Dia']},

        ],
        attributes: ['id','fechacita', 'AdminId', 'PacienteId', 'HorarioId'],
      }
    );
    res.json(Cita);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoCita = await Cita.create(req.body);
      res.json(nuevoCita);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Cita.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Cita.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};