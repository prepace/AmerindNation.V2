"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ShowUserAbout() {
    const params = useParams()
    const {userId} = params;
    const [userData, setUserData] = useState(null)

    useEffect(() => {
            const fetchUser = async () => {
                const res = await fetch(`/api/users/${userId}`)
                const data = await res.json()

                if (!res.ok) {
                    setUserData(null)
                    throw new Error(data.error)
                }

                setUserData(data.user)
            }
            fetchUser()
    }, [])

    if (!userData) {
        return <p>Loading...</p>
    }

  return (
    <div>
        {/* Add data to HTML normally */}
        {userData.name}
    </div>
  )
}
export default ShowUserAbout