exports.getAllUsers = (req, res) => {
    res.status(200).json({message: "List of all users"})
}

exports.getUser = (req, res) => {
    res.status(200).json({message: `Details of user with ID ${req.params.id} is ${req.query.enable === 'true' ? 'true' : 'false'}`})
}