import { useForm } from "react-hook-form";
import { useState } from "react"
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';


const Contacto = () => {


  const { register, handleSubmit } = useForm();
  const [enviadoCorrectamente, setEnviadoCorrectamente] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState('');

  const enviar = async (data) => {
    try {
      const mensajeContacto = {
        asunto: data.asunto,
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        correo: data.correo,
        consulta: data.consulta
      };

      console.log('Mensaje de contacto:', mensajeContacto);

      const mensajesContactoRef = collection(db, 'mensajes-contacto');
      await addDoc(mensajesContactoRef, mensajeContacto);

      console.log('Mensaje de contacto enviado con éxito.');
      setEnviadoCorrectamente(true);
    } catch (error) {
      console.error('Error al enviar el mensaje de contacto:', error);
      setErrorEnvio('Error al enviar el mensaje de contacto. Por favor, inténtalo de nuevo.');
    }
  };

  return (

    <div className="container mt-5">
      <h1 className="main-title mb-4">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">Ingrese el asunto</label>
          <input type="text" className="form-control" id="asunto" {...register("asunto")} />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Ingrese su nombre/s</label>
          <input type="text" className="form-control" id="nombre" {...register("nombre")} />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Ingrese su apellido/s</label>
          <input type="text" className="form-control" id="apellido" {...register("apellido")} />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Ingrese su numero de telefóno</label>
          <input type="number" className="form-control" id="telefono" {...register("telefono")} />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Ingrese su correo electrónico</label>
          <input type="email" className="form-control" id="correo" {...register("correo")} />
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">Ingrese su consulta</label>
          <textarea type="text" className="form-control" id="consulta" {...register("consulta")} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        {enviadoCorrectamente && <p className="text-success">Mensaje enviado correctamente.</p>}
        {errorEnvio && <p className="text-danger">{errorEnvio}</p>}
      </form>
    </div>

  )
}

export default Contacto