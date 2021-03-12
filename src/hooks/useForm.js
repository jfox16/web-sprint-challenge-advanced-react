
import useLocalStorage from 'hooks/useLocalStorage';

const useForm = ( initialValues ) => {
  const [ values, setValues ] = useLocalStorage('form', initialValues);

  const handleChanges = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  }

  return [ clearForm, handleChanges, values ];
}

export default useForm;