const db = require('../models');
const Paciente = db.Paciente;

exports.list = async function(req, res) {
  try {
    const Pacientes = await Paciente.findAll();
    res.json(Pacientes);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const paciente = await Paciente.findOne({where: {id: id},
      attributes: ['Fullname', 'Fechana', 'Genero', 'Tipodocumento','Numerodocumento', 'Email', 'Password','Imagenpaciente']});
    res.json(paciente);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para la busqueda por correo
exports.searchcorreo = async function(req, res) {
  try {
    const correo = req.params.correo;
    const paciente = await Paciente.findOne({where: {Email: correo},
      attributes: ['Fullname', 'Fechana', 'Genero', 'Tipodocumento','Numerodocumento', 'Email', 'Password','Imagenpaciente']});
    res.json(paciente);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para la busqueda por documento
exports.searchdoc = async function(req, res) {
  try {
    const numberdoc = req.params.numero;
    const paciente = await Paciente.findOne({where: {Numerodocumento: numberdoc},
      attributes: ['Fullname', 'Fechana', 'Genero', 'Tipodocumento','Numerodocumento', 'Email', 'Password','Imagenpaciente']});
    res.json(paciente);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para el login del paciente
exports.login = async function(req, res) {
  try {
    const usuario = req.params.user;
    const contra = req.params.contra;
    const paciente = await Paciente.findOne({where: {Email: usuario,Password:contra},
      attributes: ['Fullname', 'Fechana', 'Genero', 'Tipodocumento','Numerodocumento', 'Email', 'Password','Imagenpaciente']});
    res.json(paciente);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoPaciente = await Paciente.create(req.body);
      res.json(nuevoPaciente);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Paciente.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Paciente.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
