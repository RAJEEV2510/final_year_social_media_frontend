import React, { useState,useEffect } from "react";
import { Phone, Search, SvgSearch } from "../../assets/icons/icons";
import { useForm } from "react-hook-form";
import UserPlaceholder from "./user-placeholder";
import { useFetch } from "../../shared/hooks/useFetch";
import UserItem from "./users.js";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Avatar from '@mui/material/Avatar';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import './friends.css'
import { Link } from "react-router-dom";
const Friends = React.memo(() => {
  const users = useSelector((state) => state.searchedUsers);
  const id=useSelector((state)=>state.currentUser._id)
  
  console.log(id)
  const { register, handleSubmit, errors } = useForm();
  const { loading, request, error } = useFetch();
  const dispatch = useDispatch();
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [key, setKey] = useState(null);
  const [friendsData,setFriendsData]=useState([])
  const handleUsers = async (word, n) => {
    try {
      const responseData = await request(
        process.env.REACT_APP_BACKEND_URL +
          `/users?q=${word}&skip=${n ? 0 : users.length}`,
        "get"
      );
      if (responseData.data.users.length < 10) setHasMore(false);
      if (n) setLength(responseData.data.length);
      if (n && !responseData.data.length) {
        dispatch({ type: "NEW_SEARCH", payload: [] });
      }
      if (n) {
        dispatch({ type: "NEW_SEARCH", payload: responseData.data.users });
      } else {
        dispatch({ type: "SAVE_SEARCH", payload: responseData.data.users });
      }
    } catch (err) {
      console.log(error);
    }
  };


  const onSubmit = (data) => {
    setKey(data.keyword);
    handleUsers(data.keyword.trim(), true);
  };


  useEffect(()=>{
    const loggedInId=JSON.parse(localStorage.getItem("userData2"))._id
    fetch(`https://socialbackends.herokuapp.com/friends/${loggedInId}`).then((data)=>data.json()).then(res=>{
      console.log(res)
      if(res==null)
      setFriendsData([])
      else
      setFriendsData(res.friends)
    })

  },[])
   useEffect(()=>{
    document.title="Friends";

    // fetch( process.env.REACT_APP_BACKEND_URL + `/users/rooms/${id}`).then((data)=>data.json()).then((data)=>{
    //   console.log(data)
   
    // })

  },[])

  


  return (
    <div className="friends">
        <div className="friends__container">
        <div className="friends__header">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="friends__form__unit">
              <input
                type="text"
                name="keyword"
                className="friends__search"
                ref={register}
                required
              />
              <span className="icon">
                <Search width="2.2rem" height="2.2rem" />
              </span>
              <button className="btn btn--contained1-primary mg-none">
                {" "}
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="friends__users">
          {loading && (
            <div>
              <UserPlaceholder />
              <UserPlaceholder />
              <UserPlaceholder />
              <UserPlaceholder />
            </div>
          )}
          
          {users.length && !loading && (
            <InfiniteScroll
              dataLength={length}
              next={() => handleUsers(key)}
              hasMore={key ? hasMore : false}
              loader={
                <div>
                  {" "}
                  <UserPlaceholder />
                  <UserPlaceholder />
                </div>
              }
            
            >
              {users.map((user) => (
                <UserItem user={user} />
              ))}
              ;
            </InfiniteScroll>
          )}{" "}
          {!users.length && key && (
            <h1 className="text-center no-more">no users found!</h1>
          )}
          {!users.length && !key && !loading && (
            <div className="img-container">
              <SvgSearch />
            </div>
          )}
        </div>



      
      
      
      
        
      
      
      </div>
      <h1 style={{textAlign:"center",color:"white",fontSize:"20px"}}> Friends</h1>

        <div className="friend_parent">    
        {friendsData.length>0?friendsData?.map((friend)=>{
          console.log(friend)
          return(<>
          <div className="friend_div">
              <div className="friend_img">
              <Avatar alt="Remy Sharp" src={friend.img} style={{height:"80%",width:"80%"}} />
              </div>
             <div className="friend_below_info"> 
              <div className="friend_name">
                <h3>{friend.username}</h3>
              </div>
              <div className="friend_call_icon">
            <Link to="/videocall" onClick={()=>{
              localStorage.setItem("calleeId",friend._id)
            }}>  <button style={{background:"green",border:"none",padding:"3px", color:"white",borderRadius:"5px",cursor:"pointer",width:"30px"}}><PhoneCallbackIcon></PhoneCallbackIcon></button>
            </Link>
              </div>
              <div className="friend_online"> 
                {friend.isOnline?<div style={{borderRadius:"50%",width:"10px",height:"10px",background:"green"}}></div>:""}
              </div>
              </div>
            
          </div>
</>)})

:""
}
</div>
    </div>
  );
});
//

export default Friends;
