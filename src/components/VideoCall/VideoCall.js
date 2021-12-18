import Button from "@material-ui/core/Button"

import './Video.css'


import React, { useEffect, useRef, useState } from "react"

import Peer from "simple-peer"
import socket from "../socket/index"




function VideoCall() {
	const [ me, setMe ] = useState()
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [calleeId,setCalleeId]=useState("");
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
	
	useEffect(() => {

		const calleeId=localStorage.getItem("calleeId")

		fetch(`http://localhost:5000/allUser/${calleeId}`).then(promise=>promise.json()).then((data)=>{
		console.log(calleeId)
		console.log(data)
		    setCalleeId(data.socketId)
		
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})
		
	
		})
	

  }, [])
  

  socket.on("callUser", (data) => {
	setReceivingCall(true)
	setCaller(data.from)
	setName(data.name)
	setCallerSignal(data.signal)
})
socket.on("endCall",()=>{

	window.location="/friends"
});

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall:calleeId,
				signalData: data,
				from: localStorage.getItem("socketId"),
				name: JSON.parse(localStorage.getItem("userData2")).username
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		socket.emit("endCall",calleeId)

		connectionRef.current.destroy()
		window.location="/friends"
	}


	
	return (
		<>
		
		<div className="container">
			<div className="video-container">
				<div className="user-video">
					{stream &&  <video className="user-video" muted ref={myVideo} autoPlay  />}
				</div>
				<div className="friend-video">
					{callAccepted && !callEnded ?
					<video  muted ref={userVideo} autoPlay />:
					null}
				</div>
			</div>
	{receivingCall && !callAccepted ?	<h1 style={{color:"white",textAlign:"center",marginBottom:"15px",marginTop:"10px"}}>{name} is calling...</h1>:null}
			<div className="buttons">
				
				<div className="end-button">
					{callAccepted && !callEnded ? (
						<button style={{backgroundColor:"red"}} onClick={leaveCall}>
							End Call
						</button>
					) : (
						<button color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                            Call
						</button>
					)}
				
				</div>
				<div className="answer-button">
				{receivingCall && !callAccepted ? (
					<>
					
						<button variant="contained" color="primary" onClick={answerCall}>
							Answer
						</button>
				</>	
				) : null}
			</div>
			</div>
			
		</div>
		</>
	)
}

export default VideoCall