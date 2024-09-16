import React, { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import OptionsForm from './components/OptionsForm';

const App = () => {
  const [options, setOptions] = useState({
    length: 12,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const [password, setPassword] = useState('');

  const handleGeneratePassword = (options) => {
    const generatePassword = () => {
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

      let characters = lowercase;
      if (options.includeUppercase) characters += uppercase;
      if (options.includeNumbers) characters += numbers;
      if (options.includeSymbols) characters += symbols;

      let result = '';
      for (let i = 0; i < options.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return result;
    };

    setPassword(generatePassword());
  };

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <OptionsForm options={options} setOptions={setOptions} onGeneratePassword={handleGeneratePassword} />
      <PasswordGenerator password={password} />
    </div>
  );
};

export default App;
