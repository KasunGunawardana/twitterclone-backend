const express = require('express');

const { getPosts, createPost, postByUser, postById, isPoster,  deletePost, updatePost} = require('../controllers/post');

const { userById } = require('../controllers/user');

const { requireSignin } = require('../controllers/auth');

const { createPostValidator } = require('../validator');

const router = express.Router();

router.get('/posts', getPosts);

router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);

router.get('/post/by/:userId', requireSignin, postByUser);

router.put('/post/:postById', requireSignin, isPoster, updatePost);

router.delete('/post/:postById', requireSignin, isPoster, deletePost);

router.param('postById', postById);

router.param('userId', userById);

module.exports = router;
