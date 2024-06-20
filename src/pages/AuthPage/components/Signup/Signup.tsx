import { useState } from "react";
import { checkEmail, createTemporalUser, createUserDoc } from "@services";
import { validateEmail } from "@utils";
import { Button, Textfield } from "@components";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<string>("");
  const [signupError, setSignupError] = useState<string[]>([]);
  const [signupLoader, setSignupLoader] = useState<boolean>(false);

  const handleSignup = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSignup(value);
  };

  const submitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupLoader(true);
    const err: string[] = validateEmail(signup);

    if (err.length > 0) {
      setSignupError(err);
      setSignupLoader(false);
      return;
    }

    try {
      const signInMethods = await checkEmail(signup);

      if (signInMethods.length > 0) {
        setSignupError(["email-exists"]);
        setSignupLoader(false);
        return;
      }
      navigate("/first-project");
      const { uid } = await createTemporalUser();
      await createUserDoc(uid, signup);
      setSignupError([]);
      setSignupLoader(false);
    } catch (error) {
      setSignupError([]);
      setSignupLoader(false);
    }
  };

  return (
    <form onSubmit={submitSignup} className="authPage-form">
      <h3>Regístrate para continuar</h3>
      <Textfield id="email" error={signupError.length > 0}>
        <Textfield.Label>Introduce tu correo electrónico</Textfield.Label>
        <Textfield.Input name="email" value={signup} onChange={handleSignup} />
        <Textfield.Validation>
          {(signupError.includes("email-empty") &&
            "Por favor, ingresa tu correo electrónico.") ||
            (signupError.includes("email-format") &&
              "El formato del correo electrónico no es válido. Por favor, ingresa un correo electrónico válido.") ||
            (signupError.includes("email-exists") && "email-exists")}
        </Textfield.Validation>
        <Textfield.Helper>
          Al registrarme, acepto las <span>Condiciones del servicio</span> de
          Taskly y su
          <span>Política de privacidad</span>.
        </Textfield.Helper>
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
