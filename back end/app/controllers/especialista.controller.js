const db = require('../models');
const Especialista = db.Especialista;

exports.list = async function(req, res) {
  try {
    const Especialistas = await Especialista.findAll({
      attributes: ['id','EspecialidadId', 'DoctorId'],
    });
    res.json(Especialistas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const especialista = await Especialista.findOne(
      {
        where: {id: id},
        // include: [
        //   { model: db.Especialidad, attributes: ['Name']},
        //   { model: db.Doctor, attributes: ['FullName']}
        // ],
        attributes: ['id','EspecialidadId', 'DoctorId'],
      }
    );
    res.json(especialista);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//filtrar una lista con el id especialidad
exports.fitro1 = async function(req, res) {
  try {
    const especialidad = req.params.idespe;
    const especialistas = await Especialista.findAll({
      where:{EspecialidadId:especialidad},
      attributes: 
      ['id', 'EspecialidadId', 'DoctorId'],
    });
    res.json(especialistas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

//para pasar el objeto fitrado con especialidad y doctor
exports.fitro2 = async function(req, res) {
  try {
    const doctor = req.params.doc;
    const especialidad = req.params.idespe;
    const especialista = await Especialista.findOne(
      {
        where: [{DoctorId:doctor,EspecialidadId:especialidad}],
        attributes: ['id','EspecialidadId', 'DoctorId'],
      }
    );
    res.json(especialista);
  } catch(err) {
    res.status(500).json({error: err});
  }
}



// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoEspecialista = await Especialista.create(req.body);
      res.json(nuevoEspecialista);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Especialista.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Especialista.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};