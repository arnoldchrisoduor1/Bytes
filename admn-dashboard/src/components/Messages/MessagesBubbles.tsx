import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem'

const MessagesBubbles = ({ messages, participants }) => {

  const lastMessageRef = useRef();

  const authUser = "101";

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages]);

  return (

    <div>
      {messages.map((message) => {
        const fromMe = message.senderId === authUser;
        const chatClassName = fromMe ? "justify-self-end" : "chat-start";
        const bubbleColor = fromMe ? 'bg-customOrange/80' : "bg-sidebarTop";

        // Finding the sender's name.
        const sender = participants.find(
          (participant) => participant.userId === message.senderId
        )?.name;
        return(
          <MessageItem key={message.messageId} content={message.content} sender={sender} fromMe={fromMe} chatClassName={chatClassName} bubbleColor={bubbleColor} />
        )
      })}
    </div>
  )
}

export default MessagesBubbles;