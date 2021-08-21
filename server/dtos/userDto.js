module.exports = class UserDto {
    
    email;
    id;
    isActivated;
    role;


    constructor(user) {
        this.email = user.email;
        this.id = user._id;
        this.isActivated = user.isActivated;
        this.role = user.role;

    }
}