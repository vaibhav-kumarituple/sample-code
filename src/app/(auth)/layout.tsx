import React from 'react'
import "@/app/(dashboard)/globals.css";

const AuthLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en" >
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default AuthLayout