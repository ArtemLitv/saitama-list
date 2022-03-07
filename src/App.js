import './App.css';
import {Skills} from './components/skills/skills.component';
import {MainSkills} from './components/mainSkills/MainSkills.component';
import {Note} from './components/note/Note.component';
import {data} from './data/data'
import { useState } from 'react';

function App() {
  const [logger, setLogger] = useState([]);
  const updateLogger = () => {
    setLogger(data.logger);
    console.log(data)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Skills/>
        <div>
          <MainSkills/>
          <Note/>
        </div>
      </div>
      <div className="logger">
        <h2>Logger <button onClick={updateLogger}>Update</button></h2>
        <div>
          {logger.map((l, index) => (
            <div key={index}>
              <h3>{l.message}, {(new Date(l.date)).toTimeString()}</h3>
              <p>{JSON.stringify(l.value)}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
