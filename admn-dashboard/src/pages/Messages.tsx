import MessageSidebar from '../components/Messages/MessageSidebar';
import MessageContainer from '../components/Messages/MessageContainer';

const Messages = () => {
  return (
    <div className='flex w-full h-screen gap-8 mt-8 overflow-hidden'>

      {/* Message Container */}
      <div className='flex-1 basis-3/4 border-r-2'>
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