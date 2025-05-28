import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="bg-primary bg-gray-950 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl text-green-500 font-bold">Título</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/solucao"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
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
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-green-500 font-semibold'
                  : 'hover:text-secondary transition hover:text-green-500 hover:font-semibold'
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;