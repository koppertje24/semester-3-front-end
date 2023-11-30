export class CharacterAbilityScores{

    constructor(options)
    {
        this.strengthSaveProficiency = options.strengthSaveProficiency || false;
        this.strength = options.strength || 0;
        this.dexteritySaveProficiency = options.dexteritySaveProficiency || false;
        this.dexterity = options.dexterity || 0;
        this.constitutionSaveProficiency = options.constitutionSaveProficiency || false;
        this.constitution = options.constitution || 0;
        this.intelligenceSaveProficiency = options.intelligenceSaveProficiency || false;
        this.intelligence = options.intelligence || 0;
        this.wisdomSaveProficiency = options.wisdomSaveProficiency || false;
        this.wisdom = options.wisdom || 0;
        this.charismaSaveProficiency = options.charismaSaveProficiency || false;
        this.charisma = options.charisma || 0;
    }

    updateData(newData) {
        // Update only the provided properties
        Object.assign(this, newData);
    }

    strengthSaveProficiency = false;
    strength = 0;
    dexteritySaveProficiency = false;
    dexterity = 0;
    constitutionSaveProficiency = false;
    constitution = 0;
    intelligenceSaveProficiency = false;
    intelligence = 0;
    wisdomSaveProficiency = false;
    wisdom = 0;
    charismaSaveProficiency = false;
    charisma = 0;
}