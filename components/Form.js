import { createElement, useState } from 'react';

export default function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(state);
  };

  const [state, setState] = useState({
    name: '',
    age: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });

  }

  return createElement('form', { onSubmit: handleSubmit }, [
    createElement('fieldset', {}, [
      createElement('legend', {}, 'Add Student'),
      createElement('input', { type: 'text', name: 'name', placeholder: 'Name', onChange: handleChange, value: state.name || '' }),
      createElement('input', { type: 'number', name: 'age', placeholder: 'Age', onChange: handleChange, value: state.age || '' }),
      createElement('button', { type: 'submit' }, 'Submit')
    ]),
  ]);
}