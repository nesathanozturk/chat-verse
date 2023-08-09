import useAuthContext from "../../hooks/use-auth-context";

const Login = () => {
  const { currentUser, handleLogin } = useAuthContext();

  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Embark on a Seamless Conversational Journey 🚀
          </h1>
          <p className="py-6 text-xl font-semibold">
            Elevate your chat experience and connect like never before. Start
            chatting today and let your words create magic!
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Let&apos;s chat!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
