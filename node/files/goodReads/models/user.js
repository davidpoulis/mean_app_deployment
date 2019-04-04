const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: "string", required: true, validate: {
            validator: function (v) {
                var re = /^[A-Za-z][A-Za-z0-9]*$/;
                return re.test(v)
            },
            message: 'Provided username is invalid.'
        }
    },
    last_name: {
        type: "string", required: true, validate: {
            validator: function (v) {
                var re = /^[A-Za-z][A-Za-z0-9]*$/;
                return re.test(v)
            },
            message: 'Provided username is invalid.'
        }
    },
    image: { type: "string" }
});
userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
