import Image from "next/image";

export default function Home() {

  let age : Number = 10;

  console.log(typeof(age));

  return (
    <div className="home">
      <Header/>
      <div className="hero">
      
      </div>
      <Footer/>
    </div>

  );
}
