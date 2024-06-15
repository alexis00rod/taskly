import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "@services";
import { validateEmail } from "@utils";
import { Button, Textfield } from "@components";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>("");
  const [loginError, setLoginError] = useState<string[]>([]);
  const [loginLoader, setLoginLoader] = useState<boolean>(false);

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
    const emailChecked = await checkEmail(login);

    if (emailChecked.length) {
      setLoginError([]);
      setLoginLoader(false);
      navigate(`/auth/login/${login}`);
    } else {
      setLoginError(["email-exists"]);
      setLoginLoader(false);
      return;
    }
  };

  return (
    <form onSubmit={submitLogin} className="authPage-form">
      <h3>Inicia sesión para continuar</h3>
      {/* Email */}
      <Textfield
        id="email"
        error={
          loginError.includes("email-empty") ||
          loginError.includes("email-format") ||
          loginError.includes("email-exists")
        }
      >
        <Textfield.Label>Introduce tu correo electrónico</Textfield.Label>
        <Textfield.Input name="email" value={login} onChange={handleLogin} />
        <Textfield.Validation>
          {(loginError.includes("email-empty") &&
            "Por favor, ingresa tu correo electrónico.") ||
            (loginError.includes("email-format") &&
              "Formato de correo electrónico no válido.") ||
            (loginError.includes("email-exists") &&
              "El correo electrónico no está registrado.")}
        </Textfield.Validation>
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
