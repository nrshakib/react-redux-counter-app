const Counter = () => {
  return (
    <div className="w-72">
      <div className="bg-gray-500 text-center p-5 rounded-lg">
        <h4 className="text-gray-200 text-lg font-bold">Counter App</h4>
      </div>
      <div className="mt-8">
        <h1 className="text-center text-3xl">00</h1>
        <div className="flex items-center justify-center mt-4">
          <button className="bg-red-500 rounded-lg p-2 text-white mr-1">
            Increase
          </button>
          <button className="bg-yellow-400 rounded-lg p-2 text-white ml-1">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
