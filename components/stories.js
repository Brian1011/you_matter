import SingleCard from "./single_card";

function Stories() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 mx-6 md:mx-12 lg:m-0">
        {/* Cards */}
        <div className="col-span-2 flex-col xl:flex-row">
          <div className="flex flex-col xl:flex-row">
            <SingleCard />
            <SingleCard />
          </div>
          <div className="flex flex-col xl:flex-row">
            <SingleCard />
            <SingleCard />
          </div>
          <div className="flex flex-col xl:flex-row">
            <SingleCard />
            <SingleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
