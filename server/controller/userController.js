import User from '../model/user-schema.js';

export const userSignup = (request, response)=>{
    try{
        const exist = await User.findOne({username: request.body.username});
        if(exist){
            return response.status(401).json({message: 'Usename already exist'});
        }

        const user = request.body;
        const neUser = User(user);
        await newUser.save();

        response.status(200).json({ message: user });
    }
    catch(error){
        respons.status(500).json({message: error.message})
    }
}