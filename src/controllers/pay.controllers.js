import { db } from '../database/database.connection.js';
import { paySchema } from '../schemas/pay.schemas.js';


export async function postPay(req, res) {
    const { cardName, cardNumber, securityNumber, expirationDate } = req.body

    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return response.status(401).send("Token not sended");

    const validation = paySchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        const erros = validation.error.details.map((det) => { det.message })
        return res.status(422).send(erros);
    }

    try {

        const session = await db.collection('sessions').findOne({ token });

        if (!session) return res.status(401).send('Unauthorized');

        const user = await db.collection("users").findOne({ _id: session.userID })

        if (user) {


            delete user.password


            if (!cardNumber) return res.status(422).send("The card number have a problem")
            if (!securityNumber) return res.status(422).send("The security number it is wrong")
            if (!expirationDate) return res.status(422).send("The expirate date have a problema")

           
            const userCard = {
                userID: user._id,
                cardName,
                cardNumber,
                securityNumber,
                expirationDate
            }
        

            await db.collection("userPay").insertOne(userCard)

            return res.status(200).send("OK")
        }


    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getPay(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return response.status(401).send("Token not sended");

    try {

        const session = await db.collection('sessions').findOne({ token });

        if (!session) return res.status(401).send('Unauthorized');

        const user = await db.collection("users").findOne({ _id: session.userID })

        console.log(user)
        await res.status(200).send("OK")

    } catch (err) {
        res.status(500).send(err.message);
    }
}



