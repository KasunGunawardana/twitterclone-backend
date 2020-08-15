const express = require('express');

const { requireSignin } = require('../controllers/auth');

const { userById, allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollower, removeFollowing, removeFollower } = require('../controllers/user');

const router = express.Router();

router.get('/users', allUsers);

router.get('/user/:userId', requireSignin, getUser);

router.put('/user/:userId', requireSignin, updateUser);

router.delete('/user/:userId', requireSignin, deleteUser);

router.get('/user/photo/:userId', userPhoto);

router.put('/user/:userId/follow', requireSignin, addFollowing, addFollower);
router.put('/user/:userId/unfollow', requireSignin, removeFollowing, removeFollower);

router.param('userId', userById);

module.exports = router;
