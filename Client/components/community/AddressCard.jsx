import Image from "next/image";
import user from "../../assets/user.png";
import trash from "../../assets/trash.png";

const AddressCard = ({ address, revoke }) => {
  const screenWidth = window.innerWidth;

  return (
    <tr className="border-gray-700 hover:bg-[#22303c]">
      <th
        scope="row"
        className="flex items-center py-4 sm:px-6 whitespace-nowrap text-white"
      >
        <Image
          className="w-10 h-10 rounded-full object-cover hidden sm:inline-block"
          src={user}
          alt="Avatar"
        />
        <div className="pl-3">
          <div className="text-sm sm:text-base font-semibold">
            {screenWidth < 460 ? address.user.slice(0, 25) : address.user}
          </div>
          <div className="text-xs sm:text-sm font-normal text-gray-500">
            Admin User
          </div>
        </div>
      </th>
      <td className="py-4 px-6 hidden lg:table-cell">
        {address.user.slice(-4)}
      </td>
      <td className="py-4 px-6 hidden lg:table-cell">
        {address.access ? "Full Access" : "No Access"}
      </td>
      <td className="py-4 sm:px-6">
        <div className="flex justify-center">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-slate-800"
            onClick={() => revoke(address.user)}
          >
            <Image src={trash} className="w-2/3 h-2/3" alt="Revoke" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AddressCard;
