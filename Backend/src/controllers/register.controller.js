import register from '../models/register.model.js'

export const register = (req, res) => {
    const {username, email, phone, plan} = req.body 
    
    try {
        
    } catch (error) {
        
    }
  
    try {
        const newInteresado = newInteresado({
            username,
            email,
            phone,
            plan
        });
        //await newInteresado.save();
    } catch (error) {
        console.log(error);        
    }

}
