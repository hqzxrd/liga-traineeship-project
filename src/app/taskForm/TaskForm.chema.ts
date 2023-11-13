import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Task name is required')
    .min(3, 'Task name must be at least 3 characters')
    .max(40, 'Task name must not exceed 40 characters'),
  info: Yup.string().min(6, 'Info must be at least 6 characters').max(200, 'Info must not exceed 200 characters'),
  isCopmpleted: Yup.bool().oneOf([true, false]),
  isImportant: Yup.bool().oneOf([true, false]),
});
