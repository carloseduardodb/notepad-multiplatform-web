import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Title } from './styles';
import { useField } from '@unform/core';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

const NoteTitle: React.FC<Props> = ({ name, placeholder, type, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Title
      ref={inputRef}
      defaultValue={defaultValue}
      type={type}
      id={name}
      placeholder={placeholder}
      className={error ? 'has-error' : ''}
      {...rest}
    />
  );
};

export default NoteTitle;
