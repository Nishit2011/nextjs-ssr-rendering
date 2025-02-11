import React from 'react'

import { sampleFn } from '../../utils/some-server-side-fn';
export default function Server(){
    const res = sampleFn()
    console.log(res)
  return (
    <div>Server</div>
  )
}

