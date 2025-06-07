import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setMessage(`Bem-vindo, ${user.username}! Você está conectado ao AlertaCheia.`);
      setTimeout(() => navigate('/solucao'), 1000);
    } else {
      setMessage('Email ou senha inválidos.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setMessage('Logout realizado com sucesso.');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-blue-500 text-center mb-6 tracking-tight">Login no AlertaCheia</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:font-semibold transition hover-scale"
          >
            Entrar
          </button>
        </form>
        {JSON.parse(localStorage.getItem('currentUser')) && (
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:font-semibold transition hover-scale"
          >
            Sair
          </button>
        )}
        {message && (
          <p className={`mt-4 text-center ${message.includes('Bem-vindo') || message.includes('Logout') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
        <p className="mt-4 text-center">
          Não tem uma conta?{' '}
          <Link to="/cadastrar" className="text-blue-700 hover:underline hover:text-blue-500">
            Cadastre-se
          </Link>
        </p>
      </div>
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Login;