const express=require('express');
const {handlegetAll,getUserById,createByUser,updateByUser,DeleteById,deleteAllUsers}=require('../controllers/todo')

const router= express.Router();
router.post('/',createByUser)

router.get('/',handlegetAll);
router.get('/:id',getUserById)

router.patch('/:id',updateByUser)

router.delete('/:id',DeleteById);
router.delete('/',deleteAllUsers);
module.exports=router;

