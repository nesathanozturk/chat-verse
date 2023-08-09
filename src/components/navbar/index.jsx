import useAuthContext from "../../hooks/use-auth-context";

const Navbar = () => {
  const { currentUser, handleSignOut } = useAuthContext();

  return (
    <header className="navbar bg-primary text-primary-content">
      <nav className="containerWrapper flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Chatverse</a>
        {currentUser ? (
          <button onClick={handleSignOut} className="btn btn-neutral">
            Log out
          </button>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default Navbar;
