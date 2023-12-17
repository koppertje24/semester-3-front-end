import { Rolling } from "./RollingADice";

describe('Navigation Component', () => {
    it('renders a "Home" link', () => {
      
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
  });