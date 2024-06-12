import { useState } from "react";
import { Button, Icon, Textfield } from "@components";
import { validateLogin } from "@pages/AuthPage/utils";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [loginError, setLoginError] = useState<string[]>([]);
  const [loginLoader, setLoginLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLoginUser = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(value);
  };

  const submitLoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginLoader(true);
    const err: string[] = validateLogin(login);

    if (err.length > 0) {
      setLoginError(err);
      setLoginLoader(false);
      return;
    }

    setTimeout(() => {
      setLoginError([]);
      setLoginLoader(false);
      navigate("/auth/login/confirm");
      console.log(login);
    }, 3000);
  };

  return (
    <form onSubmit={submitLoginUser} className="w-full flex flex-col">
      <h3 className="mt-4 text-center font-medium">
        Inicia sesión para continuar
      </h3>
      {/* Email */}
      <Textfield
        id="email"
        name="email"
        value={login}
        onChange={handleLoginUser}
        error={
          loginError.includes("email-empty") ||
          loginError.includes("email-format")
        }
      >
        <Textfield.Label>Introduce tu correo electrónico</Textfield.Label>
        <Textfield.Input />
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
        margin="my-4"
        loader={loginLoader}
        disabled={loginLoader}
        fullWidth
      >
        Continuar
      </Button>
      <p className="mt-4 mb-4 text-sm text-center">O continúa con:</p>
      <Button color="secondary" fullWidth>
        <Icon type="brands" name="google" />
        Google
      </Button>
      <div className="w-full mt-4 flex flex-col items-center sm:flex-row sm:justify-between gap-x-4">
        {/* Button forgot password */}
        <Button href="/auth/signup" variant="link">
          ¿No puedes iniciar sesión?
        </Button>
        {/* Link to signup */}
        <Button href="/auth/signup" variant="link">
          Crear cuenta
        </Button>
      </div>
    </form>
  );
};

export default Login;
