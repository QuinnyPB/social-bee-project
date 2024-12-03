function Header() {
  return (
    <div className="flex p-4 rounded-b-lg items-center justify-around bg-primary-yellow text-white m-auto">
      <div className="">
        <h2 className="">Social Bee</h2>
      </div>
      <div className="rounded-lg bg-white p-2 border-red-500 border-solid border-2 text-gray-600">
        Search
      </div>
      <div className="flex gap-x-2">
        <div>You</div>
        <div>Settings</div>
      </div>
    </div>
  );
}

export default Header;
