import React from "react";

const Contact = () => {
  return (
    <div id="contato" className="max-w-[1140px] m-auto p-4 py-16">
      <h2 className="text-center text-gray-700">Nos mande uma mensagem</h2>
      <p className="text-center text-gray-700 py-2">Estamos te esperando!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="Nome" />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Sobrenome"
            />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Telefone"
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Endereço"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
              placeholder="Menssagem"
            ></textarea>
            <button className="col-span-2 m-2">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
