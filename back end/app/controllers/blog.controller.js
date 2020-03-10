const db = require('../models');
const Blog = db.Blog;

exports.list = async function(req, res) {
  try {
    const Blogs = await Blog.findAll();
    res.json(Blogs);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({where: {id: id},
      attributes: ['Titulo', 'Subtitulo', 'Resumen', 'Descripcion','Imagendelblog','Videodelblog']});
    res.json(blog);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoBlog = await Blog.create(req.body);
      res.json(nuevoBlog);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Blog.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Blog.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
