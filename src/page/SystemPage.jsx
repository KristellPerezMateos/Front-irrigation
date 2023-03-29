import Header from "../components/Header";
// import TablePlant from "../components/TablePlant";
import PlantDashboard from "../components/PlantDashboard";
import PlantAside from "../components/PlantAside";

function SystemPage() {
    return (
        <>
          <Header></Header>
          <PlantAside></PlantAside>
          <PlantDashboard></PlantDashboard>
        </>
      );
}

export default SystemPage;