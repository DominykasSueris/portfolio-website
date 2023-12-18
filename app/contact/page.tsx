import Navbar from "../componets/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center m-[20%]">
          <ul className="list">
            <li>Name: Dominykas Sueris</li>
            <li>Address: Edgware, London</li>
            <li>Phone: +447593678428</li>
            <li>Email: dominykassueris@gmail.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
