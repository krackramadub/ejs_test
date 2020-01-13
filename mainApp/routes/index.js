var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const trend = [
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
    const post = [
        {
            avatar: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg',
            author: 'Aurumn',
            title: 'Happy New Year!',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis voluptates tempore magnam quae est sit consectetur quasi.',
            dateTime: '31.12.2019 15:20',
            tags: ['New Year','New','Happy'],
            color: '#1b809e'
        },
        {
            avatar: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg',
            author: 'Admin',
            title: 'Update v30',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis voluptates tempore magnam quae est sit consectetur quasi amet incidunt quam accusantium non, exercitationem sunt unde voluptatem iure corrupti vel.',
            dateTime: '26.12.2019 15:20',
            tags: ['Update','New','Old'],
            color: '#ce4844'
        },
        {
            avatar: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg',
            author: 'Admin',
            title: 'Update v30',
            content: '<ul class="list-group"><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li></ul>',
            dateTime: '26.12.2019 15:20',
            tags: ['Update','New','Old'],
            color: '#ce4844'
        },
        {
            avatar: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg',
            author: 'Username',
            title: 'wft',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            dateTime: '10.12.2019 15:20',
            tags: ['Update v30','wft','fix'],
            color: '#9e9e9e'
        },
    ];
    
  res.render('index', { title: 'Express',trend,post});
});

module.exports = router;
