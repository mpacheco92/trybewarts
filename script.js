const emiteAlerta = () => {
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const btnEntrar = document.querySelector('.btn-entrar');
btnEntrar.addEventListener('click', emiteAlerta);

const agree = document.querySelector('#agreement');
agree.addEventListener('change', () => {
  const btnSubimit = document.querySelector('#submit-btn');
  btnSubimit.disabled = !agree.checked;
});
