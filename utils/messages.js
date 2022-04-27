const TALKER_NOT_FOUND = 'Pessoa palestrante não encontrada';
const NO_NAME = 'O campo "name" é obrigatório';
const NAME_ERROR = 'O "name" deve ter pelo menos 3 caracteres';
const NO_AGE = 'O campo "age" é obrigatório';
const AGE_ERROR = 'A pessoa palestrante deve ser maior de idade';
const EMPTY_ERROR = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
const DATE_ERROR = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
const RATE_ERROR = 'O campo "rate" deve ser um inteiro de 1 à 5';
const TOKEN_ERROR = 'Token inválido';
const NO_TOKEN = 'Token não encontrado';
const NO_EMAIL = 'O campo "email" é obrigatório';
const NO_PASSWORD = 'O campo "password" é obrigatório';
const PASSWORD_ERROR = 'O "password" deve ter pelo menos 6 caracteres';
const EMAIL_ERROR = 'O "email" deve ter o formato "email@email.com"';

module.exports = {
  TALKER_NOT_FOUND,
  NO_NAME,
  NAME_ERROR,
  NO_AGE,
  AGE_ERROR, 
  EMPTY_ERROR,
  DATE_ERROR,
  RATE_ERROR,
  NO_TOKEN,
  TOKEN_ERROR,
  NO_EMAIL,
  NO_PASSWORD,
  PASSWORD_ERROR,
  EMAIL_ERROR,
};