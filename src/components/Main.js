import React from "react";

export default function AddMain() {
  return (

    <div className="Main">

        {/* header */}
        
            <h1 className="h1--Name">Poorvaditya Behre</h1>
       
            <h2 className="h2--Occupation">Backend Developer</h2>
            <h3 className="h3--Website">
                <a className="h3--Website" href="https://drive.google.com/drive/u/0/folders/1NQSDCa46wgazoiCWoaTpabQcjF4CTSGM">Portfolio</a>
            </h3>
        

        {/* links */}
       
                    <button className="Email"><a href=''>Email</a></button>
                    <button className="LinkedIn"><a href=''>LinkedIn</a></button>
        

        {/* content */}
        <div className="Content">
           <h3>About</h3>
           <p>A highly motivated individual ,enjoys building application to solve real life problems . Bilingual and well-spoken , ability to collaborate with people
from diverse backgrounds and experiences.</p>
           <h3>Interests</h3>
           <p>loremipsun</p>
        </div>
    </div>
  );
}
