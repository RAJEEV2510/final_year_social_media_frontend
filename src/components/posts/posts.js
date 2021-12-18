import React, { useEffect,useState } from "react";
import Feed from "./feed";
import Loading from "../../shared/loading";
import PostForm from "./post-form";
import Slider from "react-slick";
import VideoPlayer from 'simple-react-video-thumbnail'
import './post.css'
const Posts = React.memo(({ currentUser }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const [video ,setVideoData]=useState([]);

  const [thumbnail,setThumnail]=useState("")


  useEffect(()=>{

    fetch("https://socialbackends.herokuapp.com/video").then((data)=>data.json()).then(data=>{

      setVideoData(data.data)
    
      }
    )
  },[])


  console.log(currentUser)
  if (!currentUser || !currentUser.img || !currentUser.username) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="post-body">
      <PostForm
        user={{
          username: currentUser.username,
          token: currentUser.token,
          id: currentUser._id,
          img: currentUser.img,
        }}
      />

<div className="slider">
<Slider {...settings}>
          {video.map((value,index)=>{
        
             return(<>
            
            <div >
  
            <VideoPlayer videoUrl={value.postedByUrl} snapshotAt={10} />
       </div>
   </>)
   })}

    
    </Slider>
</div>
      <div className="post__container">
        <Feed
          uid={currentUser._id}
          token={currentUser.token}
          img={currentUser.img}
          username={currentUser.username}
        />
      </div>
    </div>
  );
});
export default Posts;
