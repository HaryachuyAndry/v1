export default class Room {
    id;
    name;
    background;
    climate = {};
    devices = [];

    constructor(id, name = ''){
        this.id = id;
        this.name = name; 
    }

};