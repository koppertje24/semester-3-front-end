import './App.css';
import CharacterSheet from './Components/Character/CharacterSheet.js'

import CharacterSheetForm from './Components/Character/CharacterSheetForm.js'



function App() {
  return (
    <div className="Layout">
      
      <CharacterSheetForm />
      
      <CharacterSheet />
      
    </div>
  );
}

export default App;
