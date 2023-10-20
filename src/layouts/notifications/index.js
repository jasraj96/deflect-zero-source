import Notifications from "./components/Notifications";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function NotificationsFunctions() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Notifications />
        </DashboardLayout>
    );
}
export default NotificationsFunctions;
