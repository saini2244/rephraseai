import './scss/App.scss';
import { List } from './components/list';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [ isClicked, setIsClicked ] = useState(false);
  const container = useRef();

  useEffect(() => {
    if(!isClicked) {
      container.current.click();
      setIsClicked(true);
    }
  })


  return (
    <div className="App" ref={container}>
      <header className="App-header">
        <List/>
      </header>
    </div>
  );
}

export default App;
