import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nick" name="nick" ref={register ({ required: true})} />
      <input placeholder="Correo electrónico" name="email" ref={register ({ required: true})} />
      <input placeholder="Contraseña" name="password" ref={register ({ required: true})} />
      <input type="submit" />
    </form>
  );
}
