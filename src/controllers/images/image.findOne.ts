import { Request, Response } from "express";
import sharp from "sharp";
import sendError from "../../lib/responses/sendError";

// error.jpg

const findOneImage = async (req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        const { imageName } = req.params;
        // image.svg
        const imagePath = `asset/images/${imageName}`;
        const width = Number(req.query.w) || 500;
        const height = Number(req.query.h) || 500;

        sharp(imagePath)
            .resize(width, height)
            .toBuffer()
            .then((data: any) => {
                res.set('Content-Type', 'image/webp');
                res.send(data);
            })
            .catch((err: any) => {
                sharp('asset/images/error.jpg')
                    .resize(width, height)
                    .toBuffer()
                    .then((data: any) => {
                        res.set('Content-Type', 'image/webp');
                        res.send(data);
                    })
                    .catch((err2: any) => {
                        console.log(err2);
                        sendError({ res, message: 'Internal Server Error' })
                    });
                console.log(err);
            });
    } catch (err: any) {
        return (
            sendError({ res, message: 'Internal Server Error' })
        )
    }
}

export default findOneImage