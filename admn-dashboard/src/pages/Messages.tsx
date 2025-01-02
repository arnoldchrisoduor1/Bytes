import MessageSidebar from '../components/MessageSidebar';
import MessageContainer from '../components/MessageContainer';

const Messages = () => {
  return (
    <div className='flex w-full gap-8'>

      {/* Message Container */}
      <div className='flex-1 basis-3/4'>
        <MessageContainer />
      </div>

      {/* Message Sidebar */}
      <div className='flex-2 basis-1/4'>
        <MessageSidebar />
      </div>

    </div>
  )
}

export default Messages