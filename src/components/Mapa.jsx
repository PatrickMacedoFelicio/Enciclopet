import React from "react";

const Mapa = () => {
    return (
        <div id="procurar" className="mapa-container">
        <h2>Encontre um Veterinário Próximo 🐾</h2>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31343.16993229656!2d-61.94298981013388!3d-10.895489590641152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sveterin%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1741554884340!5m2!1spt-BR!2sbr" 
            className="mapa-iframe"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    );
  };
  
  export default Mapa;




