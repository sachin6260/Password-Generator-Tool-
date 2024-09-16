import React from 'react';

const PasswordGenerator = ({ password }) => {
  return (
    <div>
      <h2>Generated Password</h2>
      <textarea readOnly value={password} rows="3" cols="30" />
    </div>
  );
};

export default PasswordGenerator;
