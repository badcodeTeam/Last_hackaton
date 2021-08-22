module.exports = class UserDto {
    
    email;
    id;
    isActivated;
    role;
    name;
    number;


    constructor(user) {
        this.email = user.email;
        this.id = user._id;
        this.isActivated = user.isActivated;
        this.role = user.role;
        this.name = user.name;
        this.number = user.number;

    }
}