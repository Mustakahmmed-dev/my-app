
export default function AdminLayout({children}){
    return(
       <section>
        <h1>Welcome to admi dashboard</h1>
        <p>This is dashboard layout</p>
        <div>
            {children}
        </div>
       </section>
    )
}
