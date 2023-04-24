import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
import { Profile } from "../profile/Profile"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>
                <Route path="employees" element={<EmployeeList/>}/>
                <Route path="tickets" element={<TicketContainer/>}/>
                <Route path="employees/:employeeId" element={<EmployeeDetails/>}/>
                <Route path="customers" element={<CustomerList/>}/>
                <Route path="customers/:customerId" element={<CustomerDetails/>}/>
                <Route path="/profile" element={<Profile/>}></Route>
            </Route>
        </Routes>
    )
}