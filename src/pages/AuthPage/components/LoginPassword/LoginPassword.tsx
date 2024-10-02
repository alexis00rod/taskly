import { useState } from "react";
import { useParams } from "react-router-dom";
import { loginUser } from "@services";
import {
  handleDocumentTitle,
  handleFirebaseErrors,
  validatePassword,
} from "@utils";
import { Button, Icon, Textfield } from "@components";

const LoginPassword = () => {
  handleDocumentTitle("Iniciar sesión");
  const { email } = useParams();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [passwordLoader, setPasswordLoader] = useState<boolean>(false);

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const submitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordLoader(true);
    const err: string[] = validatePassword(password);
    if (err.length > 0) {
      setPasswordError(err);
      setPasswordLoader(false);
      return;
    }
    if (email) {
      try {
        await loginUser(email, password);
        setPasswordError([]);
        setPasswordLoader(false);
      } catch (error: unknown) {
        const firebaseErrors = handleFirebaseErrors(error);
        setPasswordError(firebaseErrors);
        setPasswordLoader(false);
      }
    }
  };

  return (
    <form onSubmit={submitPassword} className="authPage-form">
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
      <Textfield id="email" error={passwordError.length > 0}>
        <Textfield.Label>Introduce contraseña</Textfield.Label>
        <Textfield.Input
          type="password"
          name="email"
          value={password}
          onChange={handlePassword}
          fullWidth
        />
        <Textfield.Validation>
          {(passwordError.includes("password-empty") &&
            "Por favor, ingresa tu contraseña.") ||
            (passwordError.includes("password-format") &&
              "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.") ||
            (passwordError.includes("password-invalid") &&
              "La contraseña ingresada no es válida. Por favor, intenta nuevamente") ||
            (passwordError.includes("password-disabled") &&
              "La cuenta de usuario ha sido deshabilitada.") ||
            (passwordError.includes("password-too-many-requests") &&
              "Demasiados intentos fallidos. Intenta nuevamente más tarde.") ||
            (passwordError.includes("password-network-failed") &&
              "Ocurrió un error de red. Por favor, revisa tu conexión a internet.") ||
            (passwordError.includes("error-unknown") &&
              "Ha ocurrido un error desconocido. Por favor, intenta nuevamente más tarde.")}
        </Textfield.Validation>
      </Textfield>
      <Button
        type="submit"
        loader={passwordLoader}
        disabled={passwordLoader}
        fullWidth
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginPassword;
