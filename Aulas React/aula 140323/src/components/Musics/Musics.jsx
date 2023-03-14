import imgMusic1 from "../../assets/images/1.png"
import imgMusic2 from "../../assets/images/2.png"
import imgMusic3 from "../../assets/images/3.png"
import "./Musics.css";
export function Musics() {
  return (
    // fragment 
    <>
      <div className="music">
        <img src={imgMusic1} alt="img-music" />
        <h3>5GB</h3>
        <span>Node feat: Modules</span>
      </div>
      <div className="music">
        <img src={imgMusic2} alt="img-music" />
        <h3>7GB</h3>
        <span>React</span>
      </div>
      <div className="music">
        <img src={imgMusic3} alt="img-music" />
        <h3>3GB</h3>
        <span>HTML feat: CSS</span>
      </div>
    </>
  );
}