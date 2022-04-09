import { MenuAlt1Icon } from "@heroicons/react/solid";

function NavbarComponent() {
  return (
    <div className="flex justify-center py-2 self-center">
      <div className="w-full flex md:flex-row justify-between p-2 ">
        <div className="flex text-4xl hover:text-blue-500">You Matter</div>

        <div className="hidden md:flex space-x-6 items-center">
          <div>About</div>
          <div>Skill Share</div>
          <div>
            <div className="py-1 px-3 rounded-md bg-blue-600 hover:border-blue-500 text-white">
              Sign In
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <MenuAlt1Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
