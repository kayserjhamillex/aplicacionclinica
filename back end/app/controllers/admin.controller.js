const db = require('../models');
const Admin = db.Admin;

exports.list = async function(req, res) {
  try {
    const Admins = await Admin.findAll({
      attributes: ['id','Fullname', 'Fechana', 'Correo', 'Contrasena', 'Imagenadmin'],
    });
    res.json(Admins);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const admin = await Admin.findOne(
      {
        where: {id: id},
        attributes: ['Fullname', 'Fechana', 'Correo', 'Contrasena','Imagenadmin'],
      }
    );
    res.json(admin);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoAdmin = await Admin.create(req.body);
      res.json(nuevoAdmin);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Admin.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Admin.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
