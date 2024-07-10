export const errortypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
];

export const messages = {
  title: {
    valueMissing: "O campo do título não pode ficar vazio.",
    tooShort: "O título deve ter pelo menos 3 caracteres.",
  },
  category: {
    categoria: {
      valueMissing: "Por favor, selecione uma equipe.",
    },
    photo: {
      valueMissing: "O campo de vídeo não pode ficar vazio.",
      typeMismatch: "Por favor insira uma URL válida.",
      tooShort: "O URL do vídeo deve ter pelo menos 3 caracteres.",
    },
    link: {
      valueMissing: "O campo da foto não pode ficar vazio.",
      typeMismatch: "Por favor insira um URL válido de uma imagem.",
      tooShort: "O URL da foto deve ter pelo menos 3 caracteres.",
    },
    description: {
      valueMissing: "O campo de descrição não pode ficar vazio.",
      tooShort: "A descrição deve ter pelo menos 10 caracteres.",
    },
  },
};
