import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nick" name="nick" ref={register ({ required: true})} />
      {errors.nick && errors.nick.type === "required" && <p>Este campo es obligatorio</p>}
      <input placeholder="Correo electrónico" name="email" ref={register ({ required: true})} />
      {errors.email && errors.email.type === "required" &&<p>Este campo es obligatorio</p>}
      <input placeholder="Contraseña" name="password" ref={register ({ required: true})} />
      {errors.password && errors.password.type === "required" &&<p>Este campo es obligatorio</p>}
      <input type="submit" />
    </form>
  );
}
