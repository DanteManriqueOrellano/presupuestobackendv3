import { Container } from 'typedi';
import { Collection, getRepository } from "fireorm";
import { IUser } from '../../interfaces/IUser';


/**
 * Attach user to req.currentUser
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
@Collection('')
class user {
    id:string

}
const userRepository = getRepository(user);

const attachCurrentUser = async (req:any, res:any, next:any) => {

    try {

    //const UserModel = Container.get('userModel')  ;
    //const userRecord = await UserModel.findById(req.token._id);
    const userRecord = await userRepository.findById(req.token._id)
    
    if (req.baseUrl.split('/').includes('graphql')) {
      req.isAuth = false;
      return next();
    }
    if (!userRecord) {
      req.isAuth = false;
      return res.sendStatus(401);
    }
    const currentUser = userRecord;
    Reflect.deleteProperty(currentUser, 'password');
    Reflect.deleteProperty(currentUser, 'salt');
    req.isAuth = true;
    req.currentUser = currentUser;
    return next();
  } catch (e) {
    console.error('🔥 Error attaching user to req: %o', e);
    return next(e);
  }
};

export default attachCurrentUser;
