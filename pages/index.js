import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react";
import Web3 from "web3";
import { injected } from "../components/wallet/connectors"


export default function Home() {
  // active = is wallet is actively connected
  // account = blockchain address
  // library = web3
  // connector = current connector
  // activate = method to connect to a wallet
  // deactivate = method to disconnect wrom a wallet
  const {active, account, library, activate, deactivate} = useWeb3React()
  async function connect() {
    try{
      await activate(injected)
    } catch (ex){
      console.log(ex)
    }
  }

  async function disconnect() {
    try{
      deactivate()
    } catch (ex){
      console.log(ex)
    }
  }


  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
    </div>
  )
}
