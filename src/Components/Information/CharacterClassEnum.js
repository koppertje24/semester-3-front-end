export const EnumCharacterClass = {
    NoneSelecter: 0,
    Barbarian: 1,
    Bard: 2,
    Cleric: 3,
    Druid: 4,
    Fighter: 5,
    Monk: 6,
    Paladin: 7,
    Ranger: 8,
    Rogue: 9,
    Sorcerer: 10,
    Warlock: 11,
    Wizard: 12,
    Artificer: 13,
};

export const getCharacterClassIdByName = (className) => {
    const classKey = Object.keys(EnumCharacterClass).find(
        (key) => key.toLowerCase() === className.toLowerCase()
      );
    return EnumCharacterClass[classKey]|| null;
  };

export const CharacterClassSelect = ({className, classValue, classOnChange, classOnBlur}) => {
    return(
        <select id={className} name={className} value={classValue} onChange={classOnChange} onBlur={classOnBlur}>
            {Object.keys(EnumCharacterClass).map((key) => (
            <option key={EnumCharacterClass[key]} value={EnumCharacterClass[key]}>
                {key}
            </option>
            ))}
        </select>
    );
}