
import { useEffect, useState } from "react";
import"./nasa.css";
export function NasaComponent()
{
    const [mars, setMars] = useState([]);

      useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
         .then((response)=>{
            return response.json();
         })
         .then((data)=>{
            setMars(data.photos)
         })
      },[])
   
//all fetched photos shows in card style
        return(
                <div className="container-fluid">
                    <h2>Mars Photos</h2>
                     <div className="d-flex flex-wrap">
                        {
                            mars.map(item=>
                                <div className="card m-2 p-2" id="card">
                                    <img src={item.img_src} width="100" height="100" alt="mars photos" className="card-img-top" />
                                     <div className="card-body">
                                        <dl>
                                            <dt>Camera</dt>
                                            <dd>{item.camera.full_name}</dd>
                                            <dt>Rover</dt>
                                            <dd>{item.rover.name}</dd>
                                        </dl>
                                     </div>
                                </div>
                            
                                )
                        }
                     </div>
                </div>
        )
}
