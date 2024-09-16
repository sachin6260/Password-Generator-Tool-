import React from 'react';

const OptionsForm = ({ options, setOptions, onGeneratePassword }) => {
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setOptions(prevOptions => ({
      ...prevOptions,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGeneratePassword(options);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Length:
        <input type="number" name="length" value={options.length} onChange={handleChange} min="4" max="20" />
      </label>
      <label>
        Include Uppercase:
        <input type="checkbox" name="includeUppercase" checked={options.includeUppercase} onChange={handleChange} />
      </label>
      <label>
        Include Numbers:
        <input type="checkbox" name="includeNumbers" checked={options.includeNumbers} onChange={handleChange} />
      </label>
      <label>
        Include Symbols:
        <input type="checkbox" name="includeSymbols" checked={options.includeSymbols} onChange={handleChange} />
      </label>
      <button type="submit">Generate Password</button>
    </form>
  );
};

export default OptionsForm;
