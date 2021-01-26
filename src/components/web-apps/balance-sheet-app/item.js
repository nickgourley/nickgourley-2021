import { v4 as uuidv4 } from 'uuid';

class Item {
    constructor(description, value, id) {
        this.description = description;
        this.value = value;
        if(id) {
            this.id = id;
        }
        else {
            this.id = uuidv4();
        }
    }
}

export { Item };