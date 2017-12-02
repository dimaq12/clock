const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works');
});
// router.get('/', catchErrors(itemController.getMainCategories));

// router.get('/item/:slug', catchErrors(itemController.getItemBySlug));

// router.post('/add/:id',
//     itemController.upload,
//     catchErrors(itemController.resize),
//     catchErrors(itemController.updateItem
// ));

module.exports = router;