interface MessageConversationProps {
    name: string;
    message: string;
}

const MessageConversation:React.FC<MessageConversationProps> = ({ name, message }) => {
  return (
    <div className="flex flex-row border border-slate-600 gap-3 items-center w-full mt-1">
        <div className="m-auto p-4 relative">
            <div className="absolute h-2 w-2 bg-green-600 right-0 rounded-full"/>
            <img src="https://avatar.iran.liara.run/public" className="h-7 w-7 rounded-full" alt="avatar image" />
        </div>

        <div className="overflow-hidden w-[350px]">
            <div className="overflow-hidden whitespace-nowrap text-ellipsis w-full font-semibold">{name}</div>
            <div className="overflow-hidden whitespace-nowrap text-ellipsis w-full text-sm">{message}</div>
        </div>

        <div className="px-2 font-semibold">
            12:00
        </div>
    </div>
  )
}

export default MessageConversation