import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateLoginConfirm } from "@pages/AuthPage/utils";
import { Button, Icon, Textfield } from "@components";

const LoginConfirm = () => {
  const [loginConfirm, setLoginConfirm] = useState<string>("");
  const [loginConfirmError, setLoginConfirmError] = useState<string[]>([]);
  const [loginConfirmLoader, setLoginConfirmLoader] = useState<boolean>(false);
  const { email } = useParams();
  const navigate = useNavigate();

  const handleLoginConfirm = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginConfirm(value);
  };

  const submitLoginConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginConfirmLoader(true);
    const err: string[] = validateLoginConfirm(loginConfirm);

    if (err.length > 0) {
      setLoginConfirmError(err);
      setLoginConfirmLoader(false);
      return;
    }

    setTimeout(() => {
      setLoginConfirmError([]);
      setLoginConfirmLoader(false);
      navigate(`/`);
      console.log({
        email: email,
        password: loginConfirm,
      });
    }, 3000);
  };

  return (
    <form onSubmit={submitLoginConfirm} className="authPage-form">
      <h3>Inicia sesión para continuar</h3>
      <Button
        variant="text"
        href="/auth/login"
        margin="mt-[22px]"
        justify="between"
        fullWidth
      >
        {email}
        <Icon name="pen" />
      </Button>
      <Textfield
        id="email"
        error={
          loginConfirmError.includes("password-empty") ||
          loginConfirmError.includes("password-invalid")
        }
      >
        <Textfield.Label>Introduce contraseña</Textfield.Label>
        <Textfield.Input
          type="password"
          name="email"
          value={loginConfirm}
          onChange={handleLoginConfirm}
        />
        <Textfield.Message>
          {(loginConfirmError.includes("password-empty") &&
            "Por favor, ingresa tu contraseña.") ||
            (loginConfirmError.includes("password-invalid") &&
              "La contraseña ingresada no es válida. Por favor, intenta nuevamente")}
        </Textfield.Message>
      </Textfield>
      <Button
        type="submit"
        loader={loginConfirmLoader}
        disabled={loginConfirmLoader}
        fullWidth
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginConfirm;
