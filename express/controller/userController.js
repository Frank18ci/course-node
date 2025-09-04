exports.getAllUsers = (req, res) => {
    res.status(200).json({message: "List of all users"})
}

exports.getUser = (req, res) => {
    res.status(200).json({message: `Details of user with ID ${req.params.id} is ${req.query.enable === 'true' ? 'true' : 'false'}`})
}
exports.createUser = (req, res) => {
    try{
        const { name, lastname, email, phone } = req.body
        console.log(`Creating user: ${name} ${lastname}, Email: ${email}, Phone: ${phone}`)
        res.status(201).json({message: "User created"})
    } catch(error) {
        console.error(error)
        res.status(500).json({message: "Error creating user"})
    }
}

exports.updateUser = (req, res) => {
    try {
        const { name, lastname, email, phone } = req.body
        console.log(`Updating user with ID ${req.params.id}: ${name} ${lastname}, Email: ${email}, Phone: ${phone}`)
        res.status(200).json({message: "User updated"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error updating user"})
    }
}

exports.deleteUser = (req, res) => {
    try {
        console.log(`Deleting user with ID ${req.params.id}`)
        res.status(200).json({message: "User deleted"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error deleting user"})
    }
}