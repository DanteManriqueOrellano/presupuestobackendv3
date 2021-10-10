"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use('/auth', route);
    /*route.post(
      '/signup',
      
      async (req: Request, res: Response, next: NextFunction) => {
        console.log( Container.get('logger'));
        console.log('Calling Sign-Up endpoint with body: %o', req.body);
        try {
          const authServiceInstance = Container.get(AuthService);
          const { user, token } = await authServiceInstance.SignUp(req.body as IUserInputDTO);
          return res.status(201).json({ user, token });
        } catch (e) {
          console.log('🔥 error: %o', e);
          return next(e);
        }
      },
    );
  
    route.post(
      '/signin',
      async (req: Request, res: Response, next: NextFunction) => {
        Container.get('logger');
        console.log('Calling Sign-In endpoint with body: %o', req.body)
        try {
          const { email, password } = req.body;
          const authServiceInstance = Container.get(AuthService);
          const { user, token } = await authServiceInstance.SignIn(email, password);
          return res.json({ user, token }).status(200);
        } catch (e) {
          //logger.error('🔥 error: %o', e);
          return next(e);
        }
      },
    );*/
    /**
     * @TODO Let's leave this as a place holder for now
     * The reason for a logout route could be deleting a 'push notification token'
     * so the device stops receiving push notifications after logout.
     *
     * Another use case for advance/enterprise apps, you can store a record of the jwt token
     * emitted for the session and add it to a black list.
     * It's really annoying to develop that but if you had to, please use Redis as your data store
     */
    /* route.post('/logout', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
       //const logger: Logger = Container.get('logger');
       console.log('Calling Sign-Out endpoint with body: %o', req.body)
       try {
         //@TODO AuthService.Logout(req.user) do some clever stuff
         return res.status(200).end();
       } catch (e) {
         //logger.error('🔥 error %o', e);
         return next(e);
       }
     });*/
});
//# sourceMappingURL=auth.js.map