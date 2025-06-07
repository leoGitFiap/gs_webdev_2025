import { NavLink, useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="gradient-bg text-white p-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">AlertaCheia</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-green-200 transition hover:font-semibold'
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/solucao"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-green-200 transition hover:font-semibold'
              }
            >
              Solução
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-green-200 transition hover:font-semibold'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="text-white hover:text-green-200 hover:font-semibold transition"
              >
                Sair
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'text-green-500 font-semibold'
                    : 'hover:text-green-200 transition hover:font-semibold'
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        }
      `}</style>
    </nav>
  );
};

export default Nav;