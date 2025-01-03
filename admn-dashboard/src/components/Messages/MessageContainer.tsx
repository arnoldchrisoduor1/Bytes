import { useSelector } from "react-redux";
import { conversationData } from "../../constants/ConversationData";
import MessageInput from "./MessageInput";
import MessagesBubbles from "./MessagesBubbles";
import { RootState } from "../../redux/store";

const MessageContainer = () => {
  const selectedConversationId = useSelector(
    (state: RootState) => state.activeMessage.activeMessageId
  );

  // Finding the conversation matching the selected conversation.
  const selectedConversation = conversationData.conversations.find(
    (conversation) => conversation.conversationId === selectedConversationId
  );

  if (!selectedConversation) {
    return <div>No conversation found</div>;
  }

  const { messages, participants } = selectedConversation;

  return (
    <div className="flex flex-col w-full h-[85vh] overflow-y-scroll px-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-300">
      {/* Wrapper for the message bubbles */}
      <div className="flex-1 flex flex-col justify-end">
        {/* Passing the messages and the props to the bubbles component */}
        <MessagesBubbles messages={messages} participants={participants} />
      </div>
      {/* Message input box */}
      <div className="mb-2 mt-4">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
