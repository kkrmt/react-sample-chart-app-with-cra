import React, {FC, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{fileName}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
