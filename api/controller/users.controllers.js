const Users = require('../modelos/users.models');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const { generateSign } = require('../../jwt/jwt');

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await Users.find();
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getUsers = async (req,res) => {
    try {
        const {id} = req.params;
        const getUsers = await Users.findById(id).populate("allergens diary idSos");
        return res.status(200).json(getUsers);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const register = async (req, res, next) => {
    try {
        console.log(req.body);
        const newUsers = new Users(req.body);
        if(!validationEmail(req.body.userMail)){
            console.log({code: 403, message: "Invalid email"})
            res.status(403).send({code: 403, message: "Invalid email"})
            return next();
        }
        if(!validationPassword(req.body.password)){
            console.log({code: 403, message: "Invalid password"})
            res.status(403).send({code: 403, message: "Invalid password"})
            return next();
        }
        if(req.file){
            newUsers.userImage = req.file.path
        }
        newUsers.password = bcrypt.hashSync(newUsers.password, 10);
        const createdUser = await newUsers.save();
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const login = async (req, res) => {
    try {
        console.log(req.headers.authorization)
        const userInfo = await Users.findOne({userMail: req.body.userMail});
        if (bcrypt.compareSync(req.body.password, userInfo.password)){          
            const token = generateSign(userInfo._id, userInfo.userMail);
            return res.status(200).json({token, userInfo});
        } else {
            return res.status(400).json({message: "Invalid password"});
        }
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const logout = (req, res) => {
    try {
        return res.status(200).json({token: null})
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putUsers = async (req,res, next) => {
    try {
       
        const {id} = req.params;
        const putUsers = new Users(req.body);
        putUsers._id = id;

        if(req.file){
            putUsers.userImage = req.file.path
        }
        const UsersDb = await Users.findByIdAndUpdate(id, putUsers, {new: true});
        if (!UsersDb) {
            return res.status(404).json({"message":"Entry not found"});
        }

        res.status(201).json(UsersDb);
    } catch (error) {
        res.status(500).json(error);
        return next(error);
    }
};

const deleteUsers = async (req,res) => {
    try {
        const {id} = req.params;
        const usersDb = await Users.findByIdAndDelete(id);
        if (!usersDb) {
            return res.status(404).json({"message":"Entry not found"});
        }
        return res.status(200).json(usersDb);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = {getAllUsers, getUsers, register, login, logout, putUsers, deleteUsers};