import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "@utils";
import { Button, Textfield } from "@components";

const Signup: React.FC = () => {
  const [signup, setSignup] = useState<string>("");
  const [signupError, setSignupError] = useState<string[]>([]);
  const [signupLoader, setSignupLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignup = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSignup(value);
  };

  const submitSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupLoader(true);
    const err: string[] = validateEmail(signup);

    if (err.length > 0) {
      setSignupError(err);
      setSignupLoader(false);
      return;
    }
    setTimeout(() => {
      setSignupError([]);
      setSignupLoader(false);
      navigate(`/`);
      console.log(signup);
    }, 3000);
  };

  return (
    <form onSubmit={submitSignup} className="authPage-form">
      <h3>Regístrate para continuar</h3>
      <Textfield
        id="email"
        error={
          signupError.includes("email-empty") ||
          signupError.includes("email-format")
        }
      >
        <Textfield.Label>Introduce tu correo electrónico</Textfield.Label>
        <Textfield.Input name="email" value={signup} onChange={handleSignup} />
        <Textfield.Message>
          {(signupError.includes("email-empty") &&
            "Por favor, ingresa tu correo electrónico.") ||
            (signupError.includes("email-format") &&
              "El formato del correo electrónico no es válido. Por favor, ingresa un correo electrónico válido.")}
        </Textfield.Message>
      </Textfield>
      <Button
        type="submit"
        loader={signupLoader}
        disabled={signupLoader}
        fullWidth
      >
        Registrarse
      </Button>
    </form>
  );
};

export default Signup;
