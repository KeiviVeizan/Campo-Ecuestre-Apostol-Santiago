import Register from '../models/register.model.js'

export const register = async (req, res) => {
    const {email, phone, username,plan} = req.body

    try {
        const newInteresado = new Register({
            username,
            email,
            phone,
            plan
        })
        const userSaved = await newInteresado.save();
        res.json(userSaved);
    } catch (error) {
        console.log(error);
    }
};
