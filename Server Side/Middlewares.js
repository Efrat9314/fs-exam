
export const logIpAndPath = (req, res, next) => {
    const { ip, path } = req;
    console.log(`request from ${ip} to path ${path}`);
    next();
}

export const ValidateReqBody = (req, res, next) => {
    console.log('Validating body:', req.body)
    const { title, time } = req.body;

    if (typeof title !== 'string')
        return res.status(400).json({ error: 'Title is required and must be a non-empty string' });

    if (typeof time !== 'number') {
        return res.status(400).json({ error: 'Time is required and must be a number' });
    }
    next()
}
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
}

//Todo
export const checkTaskOwner = async (req, res, next) => {
    const { userId } = req.headers;
    const { id } = req.params;

    const task = await TaskModel.findOne({ _id: id, user_Id: userId });

    if (!title || title.trim() === '') {
        return res.status(403).json({ error: 'Access denied: task does not belong to the user' });
    }
    next();
}
