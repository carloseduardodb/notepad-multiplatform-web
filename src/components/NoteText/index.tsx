import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { Text } from './styles';
import { useField } from '@unform/core';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
  type: string;
}

const NoteText: React.FC<Props> = ({ name, placeholder, type, ...rest }) => {
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
    <Text
      ref={inputRef}
      defaultValue={defaultValue}
      id={name}
      placeholder={placeholder}
      {...rest}
    ></Text>
  );
};

export default NoteText;
