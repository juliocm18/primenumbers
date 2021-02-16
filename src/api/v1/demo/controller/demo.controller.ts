import { Request, Response } from "express";
import Calculator from "../../../../context/shared/utils/calculator";
import {  validationResult } from "express-validator";
import demoUseCase from '../../../../context/demo/interactor/index'


export default class DemoController {

    
    public async findByIdController (req: Request, res: Response) : Promise<any>  {
        let id: number = Number(req.params.id);        
        const response = await demoUseCase(id);
        res.status(200).json(response);

    }

    public async find (req: Request, res: Response) : Promise<any>  {
        let primeNumber: number = Number(req.params.id);
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(422).json({
                error: error.array()[0].msg
            })
        }
        const primeList = Calculator.getPrimeNumbersUntil(primeNumber);
        res.status(200).json({
            primeNumber,
            primeList
        });

    }

    public async find2 (req: Request, res: Response) : Promise<any>  {
        res.setHeader('Content-Type', 'application/json')

         /* 	#swagger.tags = ['find']
      #swagger.description = 'Endpoint to sign in a specific user' */

      /*	#swagger.parameters['obj'] = {
          in: 'body',
          description: 'User information.',
          required: true,
          type: 'object'
  } */
           
        return res.status(404).send(false)    // #swagger.responses[404]
    }

  

}