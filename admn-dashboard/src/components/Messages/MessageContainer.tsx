import { conversationData } from "../../constants/ConversationData";
import MessageInput from "./MessageInput";
import MessagesBubbles from "./MessagesBubbles";

const MessageContainer = () => {

  const testConversationId = '1';

  // Finding the conversation matching the selected conversation.
  const selectedConversation = conversationData.conversations.find(
    (conversation) => conversation.conversationId === testConversationId
  );

  if (!selectedConversation) {
    return <div>No conversation found</div>
  }

  const { messages, participants } = selectedConversation;

  return (
    <div className="flex flex-col w-full h-screen bg-green-600 px-6 py-4">
      <div className="">
      {/* Passing the messages and the props to the bubbles component. */}
      <MessagesBubbles messages={messages} participants={participants} />
      <div className="mt-10">
        <MessageInput />
        </div>
      </div>
    </div>
  )
}

export default MessageContainer