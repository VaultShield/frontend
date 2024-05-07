import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  deleteCredential,
  getAllCredentials,
  newCredential,
  updateCredential
} from 'services/credentials';
import { dataDesEncrypt, dataEncrypt } from 'services/encryption';
import { toast } from 'sonner';
import { useUserStore } from 'store/userStore';
import {
  CredentialRequest,
  CredentialResponse,
  Password
} from 'types/apiTypes';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';
interface CredentialType extends Password {
  credentialId: string;
}

export const useCredentials = () => {
  const userId = useUserStore((state) => state.user.id);
  const token = useUserStore((state) => state.token);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [listOfCredentials, setListOfCredentials] = useState<CredentialType[]>(
    []
  );
  const [credential, setCredential] = useState<CredentialType>({
    password: '',
    account: '',
    note: '',
    title: '',
    id: '',
    credentialId: ''
  });
  const credentialRequest: CredentialRequest = {
    userId: userId,
    credentialType: 'PASSWORD',
    favorite: false,
    groupId: 'null',
    password: '',
    account: '',
    note: '',
    title: ''
  };

  const [errors, setErrors] = useState<ErrorsForm>({});

  useEffect(() => {
    handleShowCredentials();
  }, []);

  const handleOpenForm = () => {
    setCredential({
      password: '',
      account: '',
      note: '',
      title: '',
      id: '',
      credentialId: ''
    });
    setOpenForm(!openForm);
  };

  const handleOpenEditForm = (id: string) => {
    setOpenEditForm(!openEditForm);
    const cred = listOfCredentials.find((c) => c.id === id);
    if (cred) {
      setCredential(cred);
    }
  };

  const handleDeleteCredential = async (id: string) => {
    try {
      await deleteCredential(token, id);
      toast.success('Credential deleted');
      handleShowCredentials();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const handleShowCredentials = async () => {
    try {
      const response = await getAllCredentials(userId, token);
      const credentials: CredentialType[] = response.map(
        (c: CredentialResponse) => ({
          ...c.password,
          password: dataDesEncrypt(c.password.password),
          credentialId: c.id
        })
      );
      setListOfCredentials(credentials);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setCredential((prevCredential) => ({
        ...prevCredential,
        password: value
      }));
    } else if (name === 'account') {
      setCredential((prevCredential) => ({
        ...prevCredential,
        account: value
      }));
    } else if (name === 'note') {
      setCredential((prevCredential) => ({
        ...prevCredential,
        note: value
      }));
    } else if (name === 'title') {
      setCredential((prevCredential) => ({
        ...prevCredential,
        title: value
      }));
    }
  };

  const handleSubmitAddCredential = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { password, account, title, note } = credential;
      const errorsForm: ErrorsForm = validateForm([
        { name: 'password', value: password, required: true },
        { name: 'account', value: account, required: true },
        { name: 'title', value: title, required: true }
      ]);

      setErrors(errorsForm);
      if (!errorsForm.password && !errorsForm.account && !errorsForm.title) {
        credentialRequest.password = dataEncrypt(password);
        credentialRequest.account = account;
        credentialRequest.title = title;
        credentialRequest.note = note;

        const response = await newCredential(token, credentialRequest);

        if (response === 'submit credential') {
          toast.success(response);
          setOpenForm(false);
          handleShowCredentials();
        } else toast.error('error in submit credential');
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  const handleSubmitEditCredential = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { password, account, title, note } = credential;
      const errorsForm: ErrorsForm = validateForm([
        { name: 'password', value: password, required: true },
        { name: 'account', value: account, required: true },
        { name: 'title', value: title, required: true }
      ]);

      setErrors(errorsForm);
      if (!errorsForm.password && !errorsForm.account && !errorsForm.title) {
        credentialRequest.password = dataEncrypt(password);
        credentialRequest.account = account;
        credentialRequest.title = title;
        credentialRequest.note = note;

        const response = await updateCredential(
          token,
          credentialRequest,
          credential.credentialId
        );
        if (response === 'updated credential') {
          toast.success(response);
          handleShowCredentials();
        } else toast.error('error in update credential');
        setOpenForm(false);
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  return {
    errors,
    handleShowCredentials,
    handleSubmitAddCredential,
    handleSubmitEditCredential,
    listOfCredentials,
    handleChange,
    handleDeleteCredential,
    handleOpenForm,
    openForm,
    handleOpenEditForm,
    openEditForm,
    credential,
    setCredential
  };
};
