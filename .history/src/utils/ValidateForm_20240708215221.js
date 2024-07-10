export const validateForm = async (formData) => {
  const errors = {};

  const trimmedFormData = {};
  for (const key in formData) {
    trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : "";
  }

  // Validate title
  if (!trimmedFormData.title) {
    errors.title = "O título é obrigatório.";
  } else if (trimmedFormData.title.length < 3) {
    errors.title = "O título deve ter pelo menos 3 caracteres.";
  } else if (trimmedFormData.title.length > 200) {
    errors.title = "O título não pode ter mais de 200 caracteres.";
  }

  // Validate category
  if (!trimmedFormData.category) {
    errors.category = "É necessário equipamento.";
  }

  // Validate photo URL
  if (!trimmedFormData.photo) {
    errors.photo = "O URL da foto é obrigatório.";
  } else if (!isPhotoURLValid(trimmedFormData.photo)) {
    errors.photo = "O URL da foto é inválido ou não é uma foto válida.";
  }

  // Validate video URL
  if (!trimmedFormData.link) {
    errors.link = "O URL do vídeo é obrigatório.";
  } else if (!isVideoURLValid(trimmedFormData.link)) {
    errors.link = "O URL do vídeo é inválido ou não é um vídeo válido.";
  }

  // Validate description
  if (!trimmedFormData.description) {
    errors.description = "A descrição é obrigatória.";
  } else if (trimmedFormData.description.length < 3) {
    errors.description = "A descrição deve ter pelo menos 3 caracteres.";
  } else if (trimmedFormData.description.length > 500) {
    errors.description = "A descrição não pode ter mais de 500 caracteres.";
  }

  return errors;
};

// Validate photo URL
const isPhotoURLValid = (url) => {
  const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
  return photoUrlPattern.test(url);
};

// Validate video URL
const isVideoURLValid = (url) => {
  const videoUrlPattern = "(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})"
  return videoUrlPattern.test(url);
};
