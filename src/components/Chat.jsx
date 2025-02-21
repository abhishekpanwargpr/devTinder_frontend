import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios"; 
const Chat = () => {
  const { targetUserId } = useParams();
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user)
  const firstName = user?.firstName;
  const userId = user?._id;
  const fetchMessages = async()=>{
    const chat = await axios.get(BASE_URL+"/chat/"+targetUserId, {
      withCredentials: true,
    })
    const chatMessages = chat.data.messages.map((msg)=>{
      
      const createdTime = new Date(msg?.createdAt);
      const currTime = new Date();
      const diff = currTime - createdTime;
      const seen = Math.round(diff / (1000 * 60 * 60)) 
      return {firstName: msg?.sender?.firstName, text: msg?.text, seen}
    })
    setMessage(chatMessages);
  }

  useEffect(()=>{
    fetchMessages();
  },[])
  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", { firstName, targetUserId, userId });

    socket.on("messageReceived", ({ firstName, text }) => {
      setMessage((message)=>[...message, { firstName, text }])
    })
    return () => {
      return socket.disconnect();
    }
  }, [userId, targetUserId])

  const sendNewMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", { firstName, userId, targetUserId, text: newMessage })
    setNewMessage("");
  }
  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col rounded-2xl shadow-lg bg-gray-800 text-white">
    <h1 className="p-4 border-b border-gray-600 text-lg font-semibold text-center bg-gray-900 rounded-t-2xl">
      Chat
    </h1>
    <div className="flex-1 overflow-y-auto p-5 space-y-4">
      {message.map((msg, index) => {
        return (
          <div
            key={index}
            className={`flex ${
              user.firstName === msg.firstName ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`chat-bubble p-3 max-w-xs rounded-lg ${
                user.firstName === msg.firstName
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-200"
              } shadow-md`}
            >
              <div className="text-sm font-medium mb-1 opacity-80">
                {msg.firstName}
              </div>
              <div>{msg.text}</div>
              <div className="text-xs mt-1 opacity-50">
                {msg.seen <= 0 || msg.seen === undefined
                  ? "Seen just now"
                  : `Seen ${msg.seen} hours ago`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div className="p-4 border-t border-gray-600 flex items-center gap-2 bg-gray-900 rounded-b-2xl">
      <input
        className="p-3 flex-1 border border-gray-500 text-black rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition" onClick={sendNewMessage}>
        Send
      </button>
    </div>
  </div>
  )
}
export default Chat