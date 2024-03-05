export const checkUserId = (req, res, next) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: "userId is required in the query parameters" });
    }

    req.userId = userId;
    
    next();
};
