import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
        alt="Praia com arvores"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Sua viagem dos sonhos</h1>
          <h2 className="text-4xl py-4 italic">Com a Wanderlust</h2>
          <p>
            Não importa se você é viajante experiente ou está planejando a sua
            primeira grande aventura, a Wanderlust está aqui para ajudar a
            descobrir o mundo de uma maneira única e emocionante. Então, comece
            a planejar a sua próxima viagem hoje mesmo e prepare-se para
            explorar o desconhecido com a Wanderlust!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
