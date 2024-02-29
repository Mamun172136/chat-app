import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered  rounded-full "
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp></IoSearchSharp>
      </button>
    </form>
  );
};

export default SearchInput;
