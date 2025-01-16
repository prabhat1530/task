
const todos=require('../models/todo');
async function createByUser(req,res) {
  try{
    const {title,description,completed}=req.body;
    const user=await todos.create({
      title:title,
      description:description,
      completed:completed
    })
    
    return res.status(200).json({msg:"success",user})
  }
  catch(err){
    res.status(500).json({ message: 'Error creating todo', error: err.message });
  }
  };
  
async function handlegetAll(req,res){
  try{
    const allUsers=await todos.find({});
    res.status(200).json({allUsers});
  }
  catch(err){
    res.status(500).json({message:'Error fetching todos',error:err.message})
  }
};


async function getUserById(req,res){
  try{
    const user=await todos.findById(req.params.id);
    if (!user){
      return res.status(404).json({message:'Todo not found'})
    }
    return res.status(200).json({user})
  }
  catch(err){
    res.status(500).json({ message: 'Error fetching todo by ID', error: err.message });
  }
  
};



async function updateByUser(req,res){
  try{
    const user=await todos.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!user){
      return res.status(404).json({ message: 'Todo not found' });
    }
  
  return res.status(200).json(user)
}
  catch(err){
    res.status(500).json({ message: 'Error updating todo', error: err.message });
  }
  };
   
  
  async function DeleteById(req, res) {
    try {
      const user = await todos.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      return res.json({ message: 'Todo deleted successfully', user });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting todo', error: err.message });
    }
  };
  
  async function deleteAllUsers(req, res) {
    try {
      await todos.deleteMany();
      return res.json({ message: 'All todos deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting all todos', error: err.message });
    }
  }


module.exports={handlegetAll,getUserById,createByUser,updateByUser,DeleteById,deleteAllUsers};