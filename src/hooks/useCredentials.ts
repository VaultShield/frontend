import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  getAllCredentials,
  newCredential,
  updateCredential
} from 'services/credentials';
import { dataEncrypt } from 'services/encryption';
import { toast } from 'sonner';
import { useUserStore } from 'store/userStore';
import { CredentialRequest, Password } from 'types/apiTypes';
import { ErrorsForm } from 'types/types';
import { validateForm } from 'utils/validations';

/**  password: '',
    account: '',
    note: '',
    title: ''
     */
interface UseCredentialProps {
  onClose: () => void;
}

export const useCredentials = ({ onClose }: UseCredentialProps) => {
  const userId = useUserStore((state) => state.user.id);
  const token = useUserStore((state) => state.token);

  const [listOfCredentials, setListOfCredentials] = useState<Password[]>([]);

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

  const [password, setPassword] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() => {
    handleShowCredentials();
  }, [listOfCredentials]);

  const formValidation = () => {
    const errorsForm: ErrorsForm = validateForm([
      { name: 'password', value: password, required: true },
      { name: 'account', value: account, required: true },
      { name: 'title', value: title, required: true }
    ]);

    setErrors(errorsForm);
    console.log(errors);
    if (!errorsForm.password && !errorsForm.account && !errorsForm.title) {
      credentialRequest.password = dataEncrypt(password);
      credentialRequest.account = account;
      credentialRequest.title = title;
      credentialRequest.note = note;
      return true;
    }
    return false;
  };

  const handleAddCredential = async () => {
    try {
      const errorsForm: ErrorsForm = validateForm([
        { name: 'password', value: password, required: true },
        { name: 'account', value: account, required: true },
        { name: 'title', value: title, required: true }
      ]);

      setErrors(errorsForm);
      console.log(errors);
      if (!errorsForm.password && !errorsForm.account && !errorsForm.title) {
        credentialRequest.password = dataEncrypt(password);
        credentialRequest.account = account;
        credentialRequest.title = title;
        credentialRequest.note = note;

        const response = await newCredential(token, credentialRequest);

        if (response === 'submit credential') toast.success(response);
        else toast.error('error in submit credential');
      }
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  const handleEditCredential = async (credentialId: string) => {
    try {
      if (!formValidation) throw new Error('no credentials');
      const response = await updateCredential(
        token,
        credentialRequest,
        credentialId
      );
      if (response === 'updated credential') toast.success(response);
      else toast.error('error in update credential');
    } catch (err) {
      if (err instanceof Error) setErrors({ error: err.message });
    }
  };

  const handleDeleteCredential = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowCredentials = async () => {
    try {
      const response = await getAllCredentials(userId, token);
      const credentials: Password[] = response.map(
        (c: { password: Password }) => c.password
      );
      setListOfCredentials(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else if (name === 'account') {
      setAccount(value);
    } else if (name === 'note') {
      setNote(value);
    } else if (name === 'title') {
      setTitle(value);
    }
  };

  const handleSubmitAddCredential = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddCredential();
    onClose();
  };

  const handleSubmitEditCredential = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //handleEditCredential();
    onClose();
  };

  const handleButtomDeleteCredential = (id: string) => {
    console.log(id);
    handleDeleteCredential();
  };

  return {
    password,
    account,
    title,
    note,
    errors,
    setAccount,
    setPassword,
    setTitle,
    setNote,
    handleShowCredentials,
    handleSubmitAddCredential,
    handleSubmitEditCredential,
    listOfCredentials,
    handleChange,
    handleButtomDeleteCredential
  };
};
