import { conversationData } from '../../constants/ConversationData';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useCallback } from 'react';
import { setSelectedMessage } from '../../redux/slices/selectedMessageSlice';
import MessageConversation from './MessageConversation';
import { setActiveMessageId } from '../../redux/slices/messageContainerIdSlice';

const MessageSidebar = () => {
  const dispatch: AppDispatch = useDispatch();

  useSelector(
    (state: RootState) => state.conversation.selectedMessage
  );

  useSelector((state: RootState) => state.activeMessage.activeMessageId);


  const handleConversationChange = useCallback(
    (conversationId: string) => {
      dispatch(setSelectedMessage(conversationId));
      dispatch(setActiveMessageId(conversationId));
    },
    [dispatch]
  );

  return (
    <div className="w-full h-[85vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
      {conversationData.conversations.map((conversation) => {
        const lastMessage = conversation.messages.length
          ? conversation.messages[conversation.messages.length - 1]
          : { content: "No messages" };

        const participantName = conversation.participants[0].name;

        return (
          <div
            key={conversation.conversationId}
            onClick={() => handleConversationChange(conversation.conversationId)}
          >
            <MessageConversation
              name={participantName}
              message={lastMessage.content}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessageSidebar;
