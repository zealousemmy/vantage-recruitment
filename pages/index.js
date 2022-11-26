import Card from "../components/card";
import ChartComp from "../components/chart";
// import LineChartDemo from "../components/chart/chart";
import DashBoardHeader from "../components/dashBoardHeader/index";
import Messages from "../components/messageCard";
import NewCustomer from "../components/newCustomer";
import RecentActivity from "../components/recentActivity";
import SideBar from "../components/sidebar";
import { DataDisplay } from "../lib/globalstyles/content.display";
import { dashBoardStatus } from "../util/dashboardOverview/employeesStatus";
export default function Home() {
  return (
    <DataDisplay>
      <DashBoardHeader />
      <div className="flex">
        <div className="container">
          <Card
            containerWidth={"100%"}
            cardWidth={"30%"}
            employeesStatus={dashBoardStatus}
          />
          <ChartComp />
          {/* <LineChartDemo /> */}
        </div>
        <Messages />
      </div>
      <div className="flex">
        <RecentActivity />
        <NewCustomer width="35%" />
      </div>
    </DataDisplay>
  );
}
