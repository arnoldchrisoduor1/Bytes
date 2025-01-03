import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

// Define types for individual message and participant
type message = {
  content: string;
  messageId: string;
  senderId: string;
  timestamp: string;
};

type participant = {
  name: string;
  userId: string;
};

// Define types for arrays of messages and participants
type MessagesArray = message[];
type ParticipantsArray = participant[];

// Update the MessageBubbleProps interface
interface MessageBubbleProps {
  messages: MessagesArray; // Array of messages
  participants: ParticipantsArray; // Array of participants
}

const MessagesBubbles: React.FC<MessageBubbleProps> = ({ messages, participants }) => {

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const authUser = "101";

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div>
      {messages.map((message) => {
        const fromMe = message.senderId === authUser;
        const chatClassName = fromMe ? "justify-self-end" : "chat-start";
        const bubbleColor = fromMe ? 'bg-customOrange/80' : "bg-sidebarTop";

        // Finding the sender's name
        const sender = participants.find(
          (participant) => participant.userId === message.senderId
        )?.name;

        return (
          <MessageItem
            key={message.messageId}
            content={message.content}
            sender={sender}
            fromMe={fromMe}
            chatClassName={chatClassName}
            bubbleColor={bubbleColor}
          />
        );
      })}
      {/* A ref for the last message */}
      <div ref={lastMessageRef}></div>
    </div>
  );
};

export default MessagesBubbles;
