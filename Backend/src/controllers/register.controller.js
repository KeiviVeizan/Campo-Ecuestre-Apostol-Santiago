import RegisterModel from '../models/register.model.js';

export const register = async (req, res) => {
    const { email, phone, username, plan } = req.body;

    try {
        const newInterested = new RegisterModel({
            username,
            email,
            phone,
            plan,
        });
        console.log('New Interested User:', newInterested);
        
        const userSaved = await newInterested.save();
        res.status(201).json(userSaved); // Envía una respuesta de éxito
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user' }); // Respuesta con error
    }
};
