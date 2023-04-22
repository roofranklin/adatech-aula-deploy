import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRegisterProps, IRegisterData} from './Register.types'
import { RegisterForm, 
         Title,
         LabelRegister,
         InputRegister,
         ButtonRegister } from './Register.styles'

const Register: React.FC<IRegisterProps> = ({ onSubmit }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<IRegisterData>({
        name: '',
        email: '',
        age: '',
    });

    const validateName = (name: string): string | undefined => {
        if (name.trim().length < 3) {
          return 'O nome deve ter no mínimo 3 caracteres';
        }
    };
      
      const validateEmail = (email: string): string | undefined => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
          return 'O email deve ser válido';
        }
    };
      
    const validateAge = (age: string): number | string | undefined => {
        const ageNumber = Number(age);
        if (isNaN(ageNumber) || ageNumber < 18) {
          return 'A idade deve ser um número maior que 17';
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const ageError = validateAge(formData.age);
      
        if (nameError || emailError || ageError) {
          alert(`${nameError || ''} ${emailError || ''} ${ageError || ''}`);
          return;
        }
      
        console.log(formData);
        onSubmit(formData);
        navigate('/listview');
      };

  return (
    <>
        <Title>Gerenciador de Tarefas</Title>
        <RegisterForm onSubmit={handleSubmit}>
            <LabelRegister>Nome:</LabelRegister>
            <InputRegister type="text" name="name" value={formData.name} onChange={handleChange} />

            <LabelRegister>Email:</LabelRegister>
            <InputRegister type="email" name="email" value={formData.email} onChange={handleChange} />

            <LabelRegister>Idade:</LabelRegister>
            <InputRegister type="tel" name="age" value={formData.age} onChange={handleChange} />
            
            <ButtonRegister type="submit">Enviar</ButtonRegister>
        </RegisterForm>
    </>
  );
};

export default Register;
