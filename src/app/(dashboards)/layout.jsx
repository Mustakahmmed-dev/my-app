import Link from "next/link"

const DashboardLayout = ({children}) => {
    return(
        <div>
            <div>
                Dashboard sidebar
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout