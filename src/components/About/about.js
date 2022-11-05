import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
import Class12 from "./aboutimages/imgs/aboutresult2.jpg";
import Jee from "./aboutimages/imgs/aboutresult3.jpg";
import Present from "./aboutimages/imgs/bitlogo1.png";
function about() {
  return (
    <>
      <div className="about">
        <div className="content_about">
          <h2>About Me!</h2>
          <hr />
        </div>
        <div className="container d-flex">
          <img src={Anishlogo} alt="..." srcSet="" className="anishlogo" />
          <div className="containera">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              sapiente. Optio quasi, dolor quia doloribus temporibus error ea
              aspernatur quod rem hic omnis cumque! Fuga fugiat architecto natus
              dignissimos aut. Perferendis sit aspernatur nihil eligendi
              veritatis hic fugiat sapiente, dolor laborum ut quisquam deleniti
              amet, corrupti exercitationem nemo necessitatibus porro recusandae
              nisi! Omnis cumque repudiandae iste autem reiciendis dignissimos.
              Consequuntur perferendis ut ab maiores suscipit pariatur labore
              eius, nostrum aperiam illo ad accusamus voluptatem qui vel sed
              dolores! Illo, praesentium soluta id libero, asperiores cumque
              minima dolore eligendi accusamus totam minus veritatis repellendus
              reiciendis voluptas sed accusantium perspiciatis culpa facere?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
