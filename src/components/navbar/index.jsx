const Navbar = () => {
  return (
    <header className="navbar bg-primary text-primary-content">
      <nav className="containerWrapper flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Chatverse</a>
        <button>Log out</button>
      </nav>
    </header>
  );
};

export default Navbar;
