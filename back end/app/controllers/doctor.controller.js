const db = require('../models');
const Doctor = db.Doctor;

exports.list = async function(req, res) {
  try {
    const Doctors = await Doctor.findAll();
    res.json(Doctors);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para poder filtrar una lista de doctores de la misma especialidad
// exports.filterlist = async function(req, res) {
//   try {
//     const iddoc = req.params.doct;
//     const doctors = await Doctor.findAll({where: {id: iddoc}});
//     res.json(doctors);
//   } catch(err) {
//     res.status(500).json({error: err});
//   }
// }

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findOne({where: {id: id},attributes: ['Fullname', 'Fechana', 'Genero', 'Celular','Email','Imagendoctor', 'Password', 'Facebook','Instagram','Twitter']});
    res.json(doctor);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoDoctor = await Doctor.create(req.body);
      res.json(nuevoDoctor);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Doctor.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Doctor.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
