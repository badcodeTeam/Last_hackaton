module.exports = class ClientDto {
    
    email;
    name;
    companyName;
    position;
    avatar;
    number;
    

    constructor(model) {
        this.email = model.email;
        this.name = model.name;
        this.companyName = model.companyName;
        this.position = model.position;
        this.avatar = model.avatar;
        this.number = model.number;
    }
}