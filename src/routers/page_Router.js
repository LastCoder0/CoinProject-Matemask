const router = require('express').Router();
const pageController =require('../controllers/page_controller');
router.get('/',pageController.pageFirst);
router.get('/sale',pageController.pageSale);
router.post('/sale',pageController.pageSalePOST);





module.exports = router;