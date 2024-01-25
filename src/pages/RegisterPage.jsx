import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div className='m-auto flex h-screen flex-row-reverse'>
      <div className='flex w-1/2'>
        <div className='mx-4 my-32 flex w-full items-center rounded-xl bg-white p-7 shadow-lg'>
          <div className='w-full'>
            <div className='text-center text-2xl font-bold'>
              <h2 className=''>Daftar</h2>
            </div>
            <div>
              <RegisterInput register={onRegister} />
              <p>
                Sudah punya akun?{' '}
                <Link className='text-blue-500 hover:underline' to='/login'>
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-1/2 bg-emerald-800'>
        <div className='flex w-full'></div>
      </div>
    </div>
  );
}

export default RegisterPage;
