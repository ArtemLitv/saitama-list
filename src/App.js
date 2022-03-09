import './App.css';
import { Skills } from './components/skills/skills.component';
import { MainSkills } from './components/mainSkills/MainSkills.component';
import { Note } from './components/note/Note.component';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Logger } from './components/logger/Logger.component';


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className='wrapper'>
          <Skills />
          <div>
            <MainSkills />
            <Note />
          </div>
        </div>
        <Logger/>
      </div>
    </RecoilRoot>
  );
}

export default App;
