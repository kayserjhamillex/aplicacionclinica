const db = require('../models');
const Especialidad = db.Especialidad;

exports.list = async function(req, res) {
  try {
    const Especialidads = await Especialidad.findAll();
    res.json(Especialidads);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const especialidad = await Especialidad.findOne(
      {
        where: {id: id},
        attributes: ['Name', 'Resumen', 'Descripcion', 'Precio','Atencion','ImagenEspecialidad']
      });
    res.json(especialidad);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoEspecialidad = await Especialidad.create(req.body);
      res.json(nuevoEspecialidad);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Especialidad.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Especialidad.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
