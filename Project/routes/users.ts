import { Request, Response, NextFunction, Router } from 'express'
var router: Router = Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, nxt: NextFunction) {
  res.send('respond with a resource');
});

module.exports = router;
