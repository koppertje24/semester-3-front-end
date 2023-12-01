import { CharacterAbilityScores } from './CharacterAbilityScores'

export class CharacterSheet {
    constructor(options)
    {
        this.id = options.id != null ? options.id : 0;
        this.characterName = options.CharacterName  != null ? options.CharacterName : '';
        this.characterClass = options.CharacterClass  != null ? options.CharacterClass : 0;
        this.abilityScores = options.AbilityScores  != null ? options.AbilityScores : new CharacterAbilityScores({});
        this.skillProficiency = options.SkillProficiency  != null ? options.SkillProficiency : [true, true, false];
        this.characterLevel = options.CharacterLevel  != null ? options.CharacterLevel : 1;
        this.playerId = options.playerId  != null ? options.playerId : 0;
    }

    updateData(newData) {
        // Update only the provided properties
        Object.assign(this, newData);
    }

    id = 0;
    characterName = '';
    characterClass = 0;
    abilityScores = new CharacterAbilityScores({});
    skillProficiency = [true, true, false];
    characterLevel = 1;
    playerId = 0;
}