const User = require('../Model/User');

exports.calculateFee = (req, res) => {
    const { id, fullName, address, status } = req.body;
    
    let fee = 0;
    switch(status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
        default:
            fee = 0;
    }

    const user = new User(id, fullName, address, status);
    res.json({ user, fee });
};