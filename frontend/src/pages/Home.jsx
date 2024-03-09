import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className=" flex sm:h-[450px] md:min-h-screen mt-5 shadow-md rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Sidebar></Sidebar>
      <MessageContainer></MessageContainer>
    </div>
  );
};

export default Home;
