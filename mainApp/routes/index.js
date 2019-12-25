var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const posts = [
    {
        img: 'https://cdn2.awesound.com/images/user_michael.russo/2019/27f05405-6068-441e-9acd-54d612a3893d/The_Motivation_Movement_Cover_Photo.png',
        title: 'Post 1',
        small: 'So I practice turning people into trees. Which means appreciating them just the way they are. 1',
    },
    {
        img: 'https://cdn2.awesound.com/images/user_michael.russo/2019/27f05405-6068-441e-9acd-54d612a3893d/The_Motivation_Movement_Cover_Photo.png',
        title: 'Post 2',
        small: 'So I practice turning people into trees. Which means appreciating them just the way they are.asdqweqsda 2',
    },
    {
        img: 'https://cdn2.awesound.com/images/user_michael.russo/2019/27f05405-6068-441e-9acd-54d612a3893d/The_Motivation_Movement_Cover_Photo.png',
        title: 'Post 3',
        small: 'So I practice turning people into trees. Which means appreciating them just the way they are.zzzzzzzzzzzz 3',
    },
    {
        img: 'https://cdn2.awesound.com/images/user_michael.russo/2019/27f05405-6068-441e-9acd-54d612a3893d/The_Motivation_Movement_Cover_Photo.png',
        title: 'Post 4',
        small: 'So I practice turning people into trees. Which means appreciating them just the way they are.qqqqqqqqqqqqqq 4',
    }
];
  res.render('index', { title: 'Express',posts});
});

module.exports = router;
