"use client"
import { sampleFn } from '../../utils/some-server-side-fn';
export default function Client() {
  console.log("client com")
   const res = sampleFn()
      console.log(res)
  return (
    <div>
      <h1>Client Com</h1>
      <p>This is the client com page</p>
    </div>
  )
}