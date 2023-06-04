const prisma = require('../prisma/index');

exports.createPost = async (req, res, next) => {
    try {
        const { slug, title, body, authorId } = req.body;

        const response = await prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: {
                    connect: {
                        id: authorId
                    }
                }
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        throw new Error(error);
    }
}

exports.updatePost = async (req, res, next) => {
    const { id } = req.params;
    const { body, title } = req.body;

    try {
        const response = await prisma.post.update({
            where: {
                id: id
            }, 
            data: {
                body,
                title
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        throw new Error(error);
    }
}

exports.deletePost = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const response = await prisma.post.delete({
            where: {
                id: id
            }
        });

        return res.status(200).json(response);
    } catch (error) {
        throw new Error(error);
    }
}

exports.getPosts = async (req, res, next) => {
    try {
        const response = await prisma.post.findMany();

        return res.status(200).json(response);
    } catch (error) {
        throw new Error(error);
    }
}