import useAuthContext from "../../hooks/use-auth-context";

const Navbar = () => {
  const { currentUser, handleSignOut } = useAuthContext();

  const isButtonHidden = currentUser ? (
    <button onClick={handleSignOut} className="btn btn-neutral">
      Log out
    </button>
  ) : (
    ""
  );

  return (
    <header className="navbar fixed z-10 bg-primary text-primary-content">
      <nav className="containerWrapper flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Chatverse</a>
        {isButtonHidden}
      </nav>
    </header>
  );
};

export default Navbar;
