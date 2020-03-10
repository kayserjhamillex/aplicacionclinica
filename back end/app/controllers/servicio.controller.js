const db = require('../models');
const Servicio = db.Servicio;

exports.list = async function(req, res) {
  try {
    const Servicios = await Servicio.findAll();
    res.json(Servicios);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const servicio = await Servicio.findOne({where: {id: id},
      attributes: ['Name', 'Resumen', 'Descripcion', 'Iconoservicio', 'Imagenservicio']});
    res.json(servicio);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoServicio = await Servicio.create(req.body);
      res.json(nuevoServicio);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Servicio.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Servicio.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
