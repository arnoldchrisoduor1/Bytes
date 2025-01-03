import { twMerge } from "tailwind-merge";

interface MessageItemProps {
  content: string;
  sender: string;
  fromMe: boolean;
  chatClassName: string;
  bubbleColor: string;
}


const MessageItem: React.FC<MessageItemProps> = ({ content, sender, fromMe, chatClassName, bubbleColor }) => {
  return (
    <div className={twMerge(` max-w-[400px] rounded-3xl px-4 py-1 mt-2`, bubbleColor, chatClassName)}>
      <div className="flex flex-row gap-3">
        <div className="rounded-full">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="user avatar"
            className="h-7 w-7 rounded-full"
          />
        </div>
        <div className={`${fromMe ? 'text-sidebarBottom' : 'text-white'}`}>{content}</div>
      </div>
      
      <div>
        <div className={`text-end ${fromMe ? 'text-sidebarBottom' : 'text-white'}`}>12:00 am</div>
      </div>
    </div>
  );
};

export default MessageItem;
