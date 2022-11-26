import React from "react";
import CorparateDataTable from "../../components/corporate/dataTables";
import CorporateHeaderMenu from "../../components/corporate/headerMenu";
import { DataDisplay } from "../../lib/globalstyles/content.display";

const BussinessProcess = () => {
  return (
    <DataDisplay>
      <h2 className="businessHeading">Business process</h2>
      <p className="bizText">Find all assigned task here</p>
      <CorporateHeaderMenu />
      <CorparateDataTable />
    </DataDisplay>
  );
};

export default BussinessProcess;
