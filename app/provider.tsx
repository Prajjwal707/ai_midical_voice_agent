import React from 'react'
import axios from 'axios'

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    const CreateNewUser = () => {
      const result = await axios.post('/api/users')

    }
     return(
          <div>{children}</div>
     )
}

export default Provider