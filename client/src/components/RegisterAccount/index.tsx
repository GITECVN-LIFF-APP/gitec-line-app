// Lib
import { Formik, Field, Form } from 'formik'

const RegisterAccount = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', content: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1000)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <Field name='name' className='form-control' type='text' />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <Field name='email' className='form-control' type='email' />
          </div>

          <div className='form-group'>
            <label htmlFor='subject'>Subject</label>
            <Field name='subject' className='form-control' type='text' />
          </div>

          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <Field name='content' className='form-control' as='textarea' />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary' disabled={isSubmitting}>
              {isSubmitting ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterAccount
