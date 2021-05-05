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
      <p>HPです</p>
      
    </div>
  );
}

export default App;
