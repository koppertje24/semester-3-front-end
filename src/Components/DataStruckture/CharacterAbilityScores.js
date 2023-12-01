export class CharacterAbilityScores{

    constructor(options)
    {
        this.strengthSaveProficiency = options.strengthSaveProficiency != null ? options.strengthSaveProficiency : false;
        this.strength = options.strength != null ? options.strength : 10;
        this.dexteritySaveProficiency = options.dexteritySaveProficiency != null ? options.dexteritySaveProficiency : false;
        this.dexterity = options.dexterity != null ? options.dexterity : 10;
        this.constitutionSaveProficiency = options.constitutionSaveProficiency != null ? options.constitutionSaveProficiency : false;
        this.constitution = options.constitution != null ? options.constitution : 10;
        this.intelligenceSaveProficiency = options.intelligenceSaveProficiency != null ? options.intelligenceSaveProficiency : false;
        this.intelligence = options.intelligence != null ? options.intelligence : 10;
        this.wisdomSaveProficiency = options.wisdomSaveProficiency != null ? options.wisdomSaveProficiency : false;
        this.wisdom = options.wisdom != null ?  options.wisdom : 10;
        this.charismaSaveProficiency = options.charismaSaveProficiency != null ? options.charismaSaveProficiency : false;
        this.charisma = options.charisma != null ?  options.charisma : 10;
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