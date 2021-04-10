import React from 'react';
import { CheckboxCp } from './styles';

const Checkbox = () => {
  return (
    <CheckboxCp>
      <input type="checkbox" checked id="remember" />
      <label htmlFor="remember">Lembrar de mim</label>
    </CheckboxCp>
  );
};

export default Checkbox;
