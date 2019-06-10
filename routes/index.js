var express = require('express');
var router = express.Router();
var path = require('path');
const app = express();

var blogs = [{
        title: "My-First-Week",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        title: "Fridays-at-Rocket",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];


/* GET home page. */
/* This is the ladning page route */


router.get('/', function(req, res, next) {
    // res.sendFile(path.join(__dirname + '/../public/html/index.html'));

    res.render('index', { blogs: blogs })
});

router.get('/blogs/:title', function(req, res) {
    var title = req.params.title;
    var content;

    blogs.forEach(post => {
        if (post.title == title) {
            content = post.content;
        }
    });
    res.render('article', { title: title, postContent: content, });
});

router.get('/add-post', function(req, res) {
    res.render('post');
});
router.post('/add-post', function(req, res) {
    var newObj = {
        title: "",
        content: "",
    };
    newObj.title = req.body.title;
    newObj.content = req.body.content;
    blogs.push(newObj);
    res.redirect('/');
});



module.exports = router;