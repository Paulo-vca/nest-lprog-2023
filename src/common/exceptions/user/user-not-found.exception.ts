export class UserNotFoundException extends NotFoundException{
    constructor(){
        super('E-mail already exists!');
    }
}