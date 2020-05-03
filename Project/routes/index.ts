import { Request, Response, NextFunction, Router } from 'express'
var router: Router = Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, nxt: NextFunction) {
  res.render('index', { title: 'Express' });
});

module.exports = router;