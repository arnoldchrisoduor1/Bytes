import { SendHorizontal } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="flex flex-row p-2 lg:w-[500px] bg-customGray rounded-md px-4 justify-self-center border border-slate-500">
      <input
        type="text"
        alt="searchbar"
        placeholder="Say something..."
        className="w-[100px] md:w-[250px] lg:w-[500px] bg-transparent outline-none border-none"
      />
      <SendHorizontal className="flex-end" color="gray" />
    </div>
  );
};

export default MessageInput;
