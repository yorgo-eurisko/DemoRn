import * as Yup from 'yup';

export const loginPage = Yup.object({
  username: Yup.string().required('Required'),
});
