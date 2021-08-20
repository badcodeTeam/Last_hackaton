module.exports = class ClientDto {
    
    name;
    companyName;
    position;
    avatar;

    constructor(model) {
        this.name = model.name;
        this.companyName = model.companyName;
        this.position = model.position;
        this.avatar = model.avatar;
    }
}