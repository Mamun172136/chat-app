import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected></NoChatSelected>
      ) : (
        <>
          {" "}
          <div className="bg-slate-500">
            <span className="">
              To : <span className="text-gray font-bold">John doe</span>
            </span>{" "}
          </div>
          <Messages></Messages>
          <MessageInput></MessageInput>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
