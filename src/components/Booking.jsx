import React from "react";

const Booking = () => {
  return (
    <div id="negocios" className="max-w-[1140px] mx-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destinos</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Maldivas</option>
            <option>Grande Antigua</option>
            <option>Aruba</option>
            <option>Cuba</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Buscar</label>
          <button className="w-full">Taxas & Disponibilidades</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
