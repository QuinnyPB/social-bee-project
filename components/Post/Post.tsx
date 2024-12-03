// import { useEffect, useState } from "react";

function Post() {
  // let post: Post;

  return (
    <div className="m-1 border-primary-yellow border-2 rounded-xl shadow-md">
      <div className="px-6 py-2 flex justify-between bg-primary-yellow text-white rounded-t-lg rounded-b-none">
        <h1>
          <b>Post Author</b>
        </h1>
        <div>
          <i>Avatar</i>
        </div>
      </div>

      <div className="m-4 p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde saepe
        reprehenderit tempore aperiam, eos omnis libero assumenda commodi sint
        ipsa debitis molestiae. Obcaecati non deleniti ipsa ad! Est, illo.
      </div>

      <div className="mx-4 p-2 px-2 border-b-2 border-solid border-gray-100">
        <div>Reaction List</div>
      </div>

      <div className="m-2 p-4">Comments</div>
    </div>
  );
}

export default Post;
