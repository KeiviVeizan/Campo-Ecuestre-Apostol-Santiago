import RegisterModel from '../models/register.model.js';

export const register = async (req, res) => {
    const {email, phone, username, plan} = req.body

    try {
        const newInterested = new Interested({
            username,
            email,
            phone,
            plan
        })
        console.log(newInterested)
        const userSaved = await newInterested.save();
        res.json(userSaved);
    } catch (error) {
        console.log(error);
    }
};
