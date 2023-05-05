const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        first_name: {
            type: String,
            require: true
        },
        last_name: {
            type: String
        },
        documentNumbre: {
            type: String
        },
        email: {
            type: String
        },
        gender: {
            type: String
        },
        married_status: {
            type: Boolean
        }
    }
)

module.exports = mongoose.model('users', UserScheme);