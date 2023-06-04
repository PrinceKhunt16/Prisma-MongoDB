const prisma = require('../prisma/index');
const cookieToken = require('../utils/cookieToken');

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        
        if(!name || !email || !password) {
            throw new Error('All fields must be provided.');
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        cookieToken(user, res);
    } catch (error) {
        throw new Error(error);
    }
}

exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            throw new Error('All fields must be provided.');
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            throw new Error('User does not exists.');
        }

        if(user.password !== password) {
            throw new Error('User credentials wrong.');
        }

        cookieToken(user, res);
    } catch (error) {
        throw new Error(error);
    }
}

exports.logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.json({
            success: true
        });
    } catch (error) {
        throw new Error(error);
    }
}