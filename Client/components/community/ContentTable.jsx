import AddressCard from "./AddressCard";

const ContentTable = ({ accessList, revoke }) => {
  return accessList.length > 0 &&
    accessList.find((user) => user.access === true) ? (
    <RenderTable accessList={accessList} revoke={revoke} />
  ) : (
    <div className="flex justify-center items-center py-48 text-2xl text-gray-400">
      <span>No User Found!🙅‍♂️</span>
    </div>
  );
};

const RenderTable = ({ accessList, revoke }) => (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400">
      <thead className="text-xs bg-[#15202b] text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-3 sm:px-6">
            Account Address
          </th>
          <th scope="col" className="py-3 px-6 hidden lg:table-cell">
            User Id
          </th>
          <th scope="col" className="py-3 px-6 hidden lg:table-cell">
            Access Type
          </th>
          <th scope="col" className="py-3 px-6">
            <span className="sr-only">Revoke</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {accessList.map(
          (address, index) =>
            address.access && (
              <AddressCard address={address} key={index} revoke={revoke} />
            )
        )}
      </tbody>
    </table>
  </div>
);

export default ContentTable;
