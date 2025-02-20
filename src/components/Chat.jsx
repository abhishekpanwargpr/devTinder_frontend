import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user)
  const firstName = user?.firstName;
  const userId = user?._id;
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
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat</h1>
      <div className="flex-1 overflow-scroll p-5">
        {message.map((msg, index) => {
          return (
            <div key={index} className="chat chat-start">
              <div className="chat-header">
                {msg.firstName}
              </div>
              <div className="chat-bubble">{msg.text}</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          )
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input className="p-5 flex-1 border border-gray-500 text-black rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        >
        </input>
        <button className="btn btn-secondary" onClick={sendNewMessage}>Send</button>
      </div>
    </div>
  )
}
export default Chat