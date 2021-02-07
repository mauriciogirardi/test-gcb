import axios from 'axios';

const url = 'https://viacep.com.br/ws';

export const fetchCep = async (cep: string) => {
  try {
    const formattedCep = cep.replace(/\D/g, '');

    if (formattedCep) {
      const { data } = await axios.get(`${url}/${formattedCep}/json/unicode/`);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
