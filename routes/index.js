var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
    const currentYear = new Date().getFullYear();
    //console.log(currentYear); 
    res.json({ result : true , year : currentYear  })
})

module.exports = router;
