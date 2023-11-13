import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  value: Yup.string()
    .min(3, 'Task name must be at least 3 characters')
    .max(40, 'Task name must not exceed 40 characters'),
});
