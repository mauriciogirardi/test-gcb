import Button from 'components/Button';
import Input from 'components/Input';
import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from 'utils/getValidationErrors';
import { useToast } from 'hooks/toast';
import ValidateCPF from 'utils/validateCPF';
import { fetchCep } from 'service/api';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface DataRegisterForm {
  name: string;
  cpf: string;
  cep: number;
  dateOfBirth: string;
  localidade: string;
  uf: string;
  logradouro: string;
  number: string;
  bairro: string;
}

interface CepProps {
  bairro: string;
  logradouro: string;
  localidade: string;
  uf: string;
}

const Register: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [cep, setCep] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [cepApi, setCepApi] = useState<CepProps>({} as CepProps);

  const onBlurCep = useCallback(async (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value?.length !== 9) return;

    setCepApi(await fetchCep(value));
  }, []);

  const handleSubmit = useCallback(
    async (data: DataRegisterForm) => {
      try {
        formRef.current?.setErrors({});

        const validateCPF = new ValidateCPF(data.cpf).validate();

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          cpf: Yup.string().required('Cpf obrigatório'),
          cep: Yup.string().required('Cep obrigatório'),
          dateOfBirth: Yup.string().required('Data de nascimento obrigatório'),
          logradouro: Yup.string().required('Logradouro obrigatório'),
          localidade: Yup.string().required('Cidade obrigatório'),
          uf: Yup.string().required('Estado obrigatório'),
          bairro: Yup.string().required('Bairro obrigatório'),
        });

        console.log(validateCPF);

        await schema.validate(data, {
          abortEarly: false,
        });

        localStorage.setItem('@register_test', JSON.stringify(data));

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no envio do email.',
          description: 'Erro no cadastro de email, tente novamente.',
        });
      }
    },
    [addToast],
  );

  const handleChangeCpf = useCallback((e: FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
    value = value.replace(/(-\d{2})(\d+?$)/, '$1');

    e.currentTarget.value = value;
    setCpf(value);
    return value;
  }, []);

  const handleChangeCep = useCallback((e: FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    value = value.replace(/(-\d{3})(\d+?$)/, '$1');

    e.currentTarget.value = value;
    setCep(value);
    return value;
  }, []);

  const handleChangeDate = useCallback((e: FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\/\d{4})(\d+?$)/, '$1');

    e.currentTarget.value = value;
    setDateOfBirth(value);
    return value;
  }, []);

  return (
    <S.Container>
      <S.Content>
        <Form onSubmit={handleSubmit} ref={formRef} initialData={cepApi}>
          <S.Header>
            <h1>Register</h1>
            <Link to="/">voltar</Link>
          </S.Header>
          <S.Wrapper>
            <Input name="name" placeholder="Nome" />
            <Input
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChangeDate}
              placeholder="Data de Nascimento"
            />
          </S.Wrapper>
          <S.Wrapper>
            <Input
              name="cpf"
              placeholder="CPF"
              onChange={handleChangeCpf}
              value={cpf}
            />
            <Input
              name="cep"
              placeholder="CEP"
              onChange={handleChangeCep}
              value={cep}
              onBlur={onBlurCep}
            />
          </S.Wrapper>

          <S.Wrapper>
            <Input name="localidade" placeholder="Cidade" />
            <Input name="bairro" placeholder="Bairro" />
          </S.Wrapper>

          <S.Wrapper>
            <Input name="uf" placeholder="Estato" />
            <Input name="logradouro" placeholder="Logradouro" />
          </S.Wrapper>
          <S.Wrapper>
            <Input name="number" placeholder="Numero" />
          </S.Wrapper>

          <Button type="submit">Register</Button>
        </Form>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default Register;
