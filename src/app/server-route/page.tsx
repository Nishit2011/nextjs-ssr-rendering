import React from 'react'

import { sampleFn } from '../../utils/some-server-side-fn';
import Client from '../client-route/page';
export default function Server(){
    const res = sampleFn()
    console.log(res)
  return (
    <div>
      <p>Server</p>
<Client />
      
    </div>
  )
}

