import { conversationData } from '../constants/ConversationData';
import MessageConversation from './MessageConversation'

const MessageSidebar= () => {
  return (
    <div className='w-full overflow-hidden'>
        {conversationData.conversations.map((conversation) => {
            // getting the last message.
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            
            // getting the name of the other participant
            const participantName = conversation.participants[0].name;
            return (
                <MessageConversation key={conversation.conversationId} name={participantName} message={lastMessage.content} />
            )
        })}
    </div>
  )
}

export default MessageSidebar