import  { useState } from 'react';
import '../index.css'

const info = {
    nombre:'',
    email:''    
}

const Form = () => {

  const [formInfo, setFormInfo] = useState(info);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formInfo.nombre.length <= 5 || !formInfo.email.match(/\S+@\S+\.\S+/)) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage("");
      
    }else{
        setSuccessMessage(`Gracias por tu mensaje ${formInfo.nombre}, te contactaremos pronto vía email.`);
        setError("");
    }      
  }

  return (
    <div className='form-contairner'>         
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formInfo.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-field'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            required
          />
        </div>        
        
        {error && <div className="error-message">{error}</div>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

