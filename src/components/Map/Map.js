import React,{useState,useEffect} from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import './map.css'
import Avatar from '@mui/material/Avatar';

import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';
export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height:"100vh",
        latitude: 28.7577,
        longitude: 77.4376,
        zoom: 4
      });

      const [nearByFriends,setNearByFriends]=useState([])
     
      const getFriends =async()=>{
        const friendsData=await  fetch("https://socialbackends.herokuapp.com/nearby")
          const data=await friendsData.json();
        
          setNearByFriends(data.data)
          console.log(data)
        }
  
     
      useEffect(() => {
        

        navigator.geolocation.getCurrentPosition(function(position) {
      

          const mapData={
            longi:position.coords.longitude,
            latti:position.coords.latitude,
            creator:JSON.parse(localStorage.getItem("userData2"))._id
          }
          setViewport({...viewport,longitude:mapData.longi,latitude:mapData.latti})

        
          fetch(`https://socialbackends.herokuapp.com/nearby`, {
         method: "POST",
           headers: {
            "Content-Type": "application/json",
       
      },

      
          body: JSON.stringify(mapData),
        })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        getFriends()
     
      })
      .catch((error) => {
     

          getFriends()
      

      });


        });
    }, [])



    return (
        <div className="map">
        
         <ReactMapGL
        mapboxApiAccessToken={"pk.eyJ1IjoicmFqZWV2Y3MiLCJhIjoiY2t3ZmFjMmllMGNnaDJxbW8yeTBudzVzZCJ9.ukKpg9JhMwdwE5IR0c6VmA"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/rajeevcs/ckwfbe7tt3r4414o8y6lhyr44"
      >
        {nearByFriends.length>0?nearByFriends?.map((value)=>{

console.log(value)
                  return (<>

                    
                <Marker latitude={Number(value.latti)} longitude={Number(value.longi)} offsetLeft={-20} offsetTop={-10}>
        <RoomIcon style={{fontSize:viewport.zoom*2,color:"slateblue"}}></RoomIcon>
      </Marker>
      <Popup
       latitude={Number(value.latti)} longitude={Number(value.longi)}
          anchor="bottom" >
          
            <div style={{width:"80px"}}>
        <Avatar alt="Remy Sharp" src={value.creator?.img} style={{width:"80px",height:"80px"}} />
        <h4>{value.creator?.name}</h4>
                    </div>
                  <a href={`/profile/${value.creator?._id}`} style={{fontSize:"20px"}} >Visit pofile</a>
        </Popup>
            </>
          )
        }):""}
            
          </ReactMapGL>   
        </div>
    )
}
