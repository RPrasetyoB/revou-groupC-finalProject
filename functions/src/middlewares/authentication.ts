import { Request, Response, NextFunction } from 'express';

const authentication = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization    
    if (!authHeader) {
        res.status(403).json({ error: 'Acces forbidden, please login' })
    }
    next()    
}

export default authentication