const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/healthcare');
// const auth = require('../../middleware/auth')

router.post('/add',ctrl.addPost);                      // add new POst in database
router.get('/find',ctrl.findAll)  
router.get('/latest-data',ctrl.findLatest)  


// router.put('/edit-user',auth ,ctrl.editUser)
// router.delete('/delete-user',auth ,ctrl.removeUser);              // delete user from database
// router.delete('/delete/:id',auth,ctrl.removeSelectedUser);              // delete user from database
// router.get('/all-user',auth,ctrl.getAllUser);                    // get all user from database
// router.put('/change-username',auth,ctrl.updateUsername)


module.exports = router;
