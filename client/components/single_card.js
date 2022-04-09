import Image from "next/image";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/solid";

export default function SingleCard() {
  return (
    <div className="bg-white rounded-md text-black p-2 m-2 flex shadow-md hover:shadow-xl">
      <div className="w-full p-2 flex flex-col md:flex-row">
        {/* Image */}
        {/*<div className="h-56 bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center text-white">
          <div className="self-center">Image</div>
        </div>*/}

        <div className="h-auto border-2 rounded-md flex justify-center items-center w-2/6 bg-black">
          <div className="self-center text-white">Image</div>
        </div>

        <div className="w-4/6 px-2 justify-center">
          <div className="px-4">
            {/* Title */}
            <div className="text-2xl text-bold py-2">Betty's Story</div>

            {/* Content */}
            <div className="py-2 text-gray-400 tracking-wide">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              asperiores repellat..."
            </div>

            {/*Footer*/}
            <div className="flex flex-row">
              <div className="w-1/2 flex justify-start">
                <div className="py-2 flex flex-row hover:text-blue-500">
                  <div className="">Read More </div>
                  <ChevronRightIcon className="h-5 w-8 self-center" />
                </div>
              </div>

              <div className="w-1/2 flex justify-end">
                <div className="py-2 flex flex-row">
                  <ClockIcon className="h-5 w-8 self-center text-blue-400" />
                  <div className="text-gray-500">12 hours Ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
