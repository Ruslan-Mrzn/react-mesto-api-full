const router = require('express').Router();
const { celebrate, Joi } = require('celebrate'); // миддлвар для валидации приходящих на сервер запросов
// eslint-disable-next-line no-unused-vars
const validator = require('validator');

const { checkURL } = require('../utils/utils');

const {
  getUsers, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum(),
  }),
}), getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateProfile);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom(checkURL).required(),
  }),
}), updateAvatar);

module.exports = router;
