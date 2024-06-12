import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "@utils";
import { Button, Textfield } from "@components";

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [loginError, setLoginError] = useState<string[]>([]);
  const [loginLoader, setLoginLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(value);
  };

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginLoader(true);
    const err: string[] = validateEmail(login);

    if (err.length > 0) {
      setLoginError(err);
      setLoginLoader(false);
      return;
    }

    setTimeout(() => {
      setLoginError([]);
      setLoginLoader(false);
      navigate(`/auth/login/${login}`);
      console.log(login);
    }, 3000);
  };

  return (
    <form onSubmit={submitLogin} className="authPage-form">
      <h3>Inicia sesión para continuar</h3>
      {/* Email */}
      <Textfield
        id="email"
        error={
          loginError.includes("email-empty") ||
          loginError.includes("email-format")
        }
      >
        <Textfield.Label>Introduce tu correo electrónico</Textfield.Label>
        <Textfield.Input name="email" value={login} onChange={handleLogin} />
        <Textfield.Message>
          {(loginError.includes("email-empty") &&
            "Por favor, ingresa tu correo electrónico.") ||
            (loginError.includes("email-format") &&
              "El formato del correo electrónico no es válido. Por favor, ingresa un correo electrónico válido.")}
        </Textfield.Message>
      </Textfield>
      {/* Button submit */}
      <Button
        type="submit"
        loader={loginLoader}
        disabled={loginLoader}
        fullWidth
      >
        Continuar
      </Button>
    </form>
  );
};

export default Login;
