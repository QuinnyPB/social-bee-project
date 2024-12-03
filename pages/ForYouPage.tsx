import Post from "@/components/Post/Post";

function ForYouPage() {
  return (
    <div
      className="
        border-solid 
        border-orange-500 
        border-2 
        p-4 my-4 mx-4
        flex
        justify-evenly
        "
    >
      {/* Left Panel: Control panel? */}
      <div className="w-1/3 p-2 border-solid border-lime-500 border-2">
        <h1 className="">Control Panel / Messages</h1>
      </div>
      {/* Middle Panel: Posts */}
      <div className="w-3/5 p-2 border-solid border-red-500 border-2">
        <Post />
      </div>
      {/* Right Panel: Important notifs */}
      <div className="w-1/3 p-2 border-solid border-blue-500 border-2">
        <h1>Notifs</h1>
      </div>
    </div>
  );
}

export default ForYouPage;
