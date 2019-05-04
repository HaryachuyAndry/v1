class Device {
    name;
    position = {};
    description = '';
    icon;

    constructor(name){
        this.name = name;
        this.position = { x: 0, y: 0 }
    }
}