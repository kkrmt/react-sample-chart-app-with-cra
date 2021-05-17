import React, {FC, useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import EnhancedCounterWidget from './containers/templates/CounterWidget';

type Props = {
  name?: string,
}

const App: FC<Props> = ({name}) => {
  const [fileName, setFileName] = useState("")

  useEffect(() => {
    if (!!name) {
      setFileName(name);
    }
  },[name]);

  return (
    <div className="App">
    <header>
      <h1>{fileName}</h1>
    </header>
    <EnhancedCounterWidget />
    </div>
  );
}

export default App;
