import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Home from '../home';
import {Switch,Redirect,Route} from 'react-router-dom';
import Chat from '../chat/chat-page';
import Loading from '../../shared/models/loading-modal';
import { useFetch } from "../../shared/hooks/useFetch";
import socket from '../socket'
import VideoCall from '../VideoCall/VideoCall';
import Map from '../Map/Map'

const On=()=>{
	const { loading , request } = useFetch();
	const user = useSelector(state=>state.currentUser);
    const dispatch= useDispatch();
    const injectSocketIdToUser= async ()=>{
            console.log(socket.id);

    try {
      const response = await request(
        process.env.REACT_APP_BACKEND_URL +
          `/users/update-info/${user._id}`,
        "patch",
        {socketId:socket.id},
        {
          Authorization: "Bearer " + user.token,
        }
      );
      dispatch({
      	type:'ADD_SOCKET',
      	payload:socket.id
      }) 
    } catch (err) {
      console.log(err.response);
    }
  }
  useEffect(()=>{
  
     if(user && user._id){
    
      socket.emit('action',{
        type:'USER_LOGIN',
        userId:user._id})
     }
     
     localStorage.setItem("socketId",socket.id)
     console.log(socket.id)


  },[user])
    if(user && user.token){
	return <div>		  
		<div  className="wrapper">
		<Switch>
			<Route path="/chat" component={Chat}/>
      <Route path="/videocall" component={VideoCall}/>
      <Route exact path="/nearby" component={Map}/>   
			<Route path="/" component={Home} />
   
			<Redirect from="*" to='' />
		</Switch>		
		</div>
		</div>
	}
	return <Loading />
}
export default On;