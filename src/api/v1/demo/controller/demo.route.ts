import { Router } from 'express';
import Controller from './demo.controller';
import { check } from "express-validator";

const route: Router = Router();
const controller = new Controller();


route.get('/find2/:id', controller.findByIdController);

route.get('/find/:id', check('id').isInt({ min: 1 }), controller.find);

route.get("/holajb", controller.find2, x => {
    /* 	#swagger.tags = ['holajb']
      #swagger.description = 'Endpoint to sign in a specific user' 
      
        #swagger.parameters['obj'] = {
          in: 'body',
          description: 'User information.',
          required: true,
          type: 'object'
  } */
});


export default route;
