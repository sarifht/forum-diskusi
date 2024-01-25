import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Nama Lengkap</label>
        <input
          placeholder='Masukkan Username'
          className='rounded-md border-2 border-solid border-black p-2'
          type='text'
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Email</label>
        <input
          placeholder='Masukkan Email'
          className='rounded-md border-2 border-solid border-black p-2'
          type='email'
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='font-bold'>Kata Sandi</label>
        <input
          placeholder='Masukkan Kata Sandi'
          className='rounded-md border-2 border-solid border-black p-2'
          type='password'
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button
        type='button'
        className='mt-4 w-full rounded-lg bg-emerald-800 py-2 text-white'
        onClick={() => register({ name, email, password })}
      >
        Daftar
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
