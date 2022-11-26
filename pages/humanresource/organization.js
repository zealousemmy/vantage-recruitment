import React from "react";
import { DataDisplay } from "../../lib/globalstyles/content.display";
import Card from "../../components/card";
import DashBoardHeader from "../../components/dashBoardHeader";
import { humanResourceStatus } from "../../util/humanResources/employeesStatus";
import DataTable from "../../components/humanResource/dataTables";
import HeaderMenu from "../../components/humanResource/headerMenu";
import Organogram from "../../components/humanResource/Organogram";
const OrganizationStructure = () => {
  return (
    <DataDisplay>
      <DashBoardHeader />
      <Card cardWidth={"23%"} employeesStatus={humanResourceStatus} />
      <HeaderMenu contentOne={<DataTable />} contentTwo={<Organogram />} />
      {/* <DataTable /> */}
    </DataDisplay>
  );
};

export default OrganizationStructure;
