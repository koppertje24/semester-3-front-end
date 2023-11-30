export class DndPlayerinfo {

    constructor(options)
    {
        console.log('dnd player created with these options', options)
        this.id = options.id || 0;
        this.PlayerName = options.PlayerName || '';
        this.CharacterSheets = options.CharacterSheets || [];
    }

    updateData(newData) {
        // Update only the provided properties
        Object.assign(this, newData);
    }

    id = 0;
    PlayerName = '';
    CharacterSheets = [];
}