import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import loginImage from '../Image/foto.jpg';

const LoginPage = ({ handleLogin, loggedIn }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    handleLogin();
  };

  if (loggedIn) {
    // Jika pengguna sudah login, redirect ke halaman beranda
    return <Navigate to="/home" replace />;
  }

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginPageTitle}>Halaman Login</h1>
      <div className={styles.formContainer}>
      <img src={loginImage} alt="Login" className={styles.loginImage} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={styles.formField}>
              <label htmlFor="username" className={styles.inputLabel}>
                Username:
              </label>
              <Field type="text" id="username" name="username" className={styles.inputField} />
              <ErrorMessage name="username" component="div" className={styles.errorMessage} />
            </div>
            <div className={styles.formField}>
              <label htmlFor="password" className={styles.inputLabel}>
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className={styles.inputField}
              />
              <ErrorMessage name="password" component="div" className={styles.errorMessage} />
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </Form>
        </Formik>
        <p className={styles.registerLink}>
          Belum punya akun? <Link to="/register">Daftar disini</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
