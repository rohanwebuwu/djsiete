import React from 'react'
import {useCollection} from "react-firebase-hooks/firestore"
import { useSession } from 'next-auth/react'



const Statusdata = () => {

  

    const { data: session } = useSession();
  return (
    <div>

        {session.user.name} <br />
        Iete sf membership?:
    </div>
  )
}

export default Statusdata