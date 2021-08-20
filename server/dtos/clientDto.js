module.exports = class ClientDto {
    
    name;
    companyName;
    position;
    avatar;
    number;

    constructor(model) {
        this.name = model.name;
        this.companyName = model.companyName;
        this.position = model.position;
        this.avatar = model.avatar;
        this.number = model.number;
    }
}