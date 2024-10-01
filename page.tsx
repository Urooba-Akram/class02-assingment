import Image from "next/image";
import Header from "./components/Header"

export default function Home() {
  return (
<div className="homeContainer">
  <div className="childContainer">
  Hey,
  <br />
  My Name is <span className="ashwhiteColor">Urooba</span>
  <br />I am web Developer
  </div>
  <div className="childContainer">
  <Image
      src="/Myimage.webp"
      width={400}
      height={300}
      alt="Picture of the author"
    />
  </div>     
    
</div>


  );
}
