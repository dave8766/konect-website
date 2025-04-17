import './App.css';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainApp from './components/MainApp';

function App() {
  const [showMainApp, setShowMainApp] = useState(false);

  const handleContinue = (isAthlete: boolean) => {
    if (isAthlete) {
      setShowMainApp(true);
    }
  };

  if (!showMainApp) {
    return <LandingPage onContinue={handleContinue} />;
  }

  return <MainApp />;
}

export default App;
