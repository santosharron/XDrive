import React from "react";
import ContentTable from "./ContentTable";

const AccessList = ({ accessList, revoke }) => {
  return (
    <div className="min-h-screen">
      <div className="px-6 sm:px-10 lg:px-20">
        <p className="text-3xl font-medium text-gray-300 my-5 text-center">
          Community🌐
        </p>
        <ContentTable accessList={accessList} revoke={revoke} />
      </div>
    </div>
  );
};

export default AccessList;
