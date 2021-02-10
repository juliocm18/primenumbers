import { Router, Request, Response } from "express";
import Calculator from "../utils/calculator";
import { check, validationResult } from "express-validator";

const demoController = Router();

const find = "/find/:id";

demoController.get(find, check('id').isInt({ min: 1 }), async (req: Request, res: Response) => {
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

});

export default demoController;