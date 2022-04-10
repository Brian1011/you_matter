function DonateForm() {
  return (
    <div className="w-full flex flex-col justify-center mt-4 p-4">
      <h1 className="text-3xl font-bold underline">{}</h1>
      <div className="flex flex-row justify-between w-3/4 space-x-2">
        <div>Contract Balance: 0</div>
        <div>
          <div>
            <form onSubmit={}}>
              <input
                type="number"
                className="py-2 px-2 border border-gray-500 rounded-md"
                onChange={}
                value={}
              />

              <button
                className="bg-blue-600 mt-2 text-white rounded-md flex justify-center"
                type="submit"
              >
                <div className="py-2 px-2">Donate</div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DonateForm;
