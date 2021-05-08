import React, {FC, useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorfulBeads from './containers/molecules/ColorfulBeads';
import CounterBoard from './containers/organisms/CounterBoard';

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
    <CounterBoard />
    <ColorfulBeads />
    </div>
  );
}

export default App;
