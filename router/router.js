const Router = require('@koa/router');
const controller = require('../controllers/controllers')

const router = new Router();

router.get('/messages', controller.getMessages)
router.post('/messages', controller.postMessage)

module.exports = router;