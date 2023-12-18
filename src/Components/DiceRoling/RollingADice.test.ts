import { MultiRolling, Rolling } from "./RollingADice";

describe('Rolling Function', () => {
    it('single rolling test', () => {
      
        let outOfRange = false;
        for(let i = 0; i < 1000; i++) {
            const result = Rolling();
            if(result.rolled < 1 || result.rolled > 20) {
                outOfRange = true;
                break;
            }
        }
        
        expect(outOfRange).toBe(false);
    });

    it('Multi rolling test', () => {
      
        let outOfRange = false;
        for(let i = 0; i < 1000; i++) {
            const result = MultiRolling(5, 0, 20);
            if(result.answer < (5*1) || result.answer > (5*20)) {
                outOfRange = true;
                break;
            }
        }
        
        expect(outOfRange).toBe(false);
    });
  });