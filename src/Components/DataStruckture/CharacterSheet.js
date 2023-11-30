import { CharacterAbilityScores } from './CharacterAbilityScores'

export class CharacterSheet {
    constructor(options)
    {
        this.id = options.id || 0;
        this.CharacterName = options.CharacterName || '';
        this.CharacterClass = options.CharacterClass || 0;
        this.AbilityScores = options.AbilityScores || new CharacterAbilityScores({});
        this.SkillProficiency = options.SkillProficiency || [true, true, false];
        this.CharacterLevel = options.CharacterLevel || 1;
        this.playerId = options.playerId || 0;
    }

    updateData(newData) {
        // Update only the provided properties
        Object.assign(this, newData);
    }

    id = 0;
    CharacterName = '';
    CharacterClass = 0;
    AbilityScores = new CharacterAbilityScores({});
    SkillProficiency = [true, true, false];
    CharacterLevel = 1;
    playerId = 0;
}