import "./App.css";
import { useState } from "react";
import Onboard from "bnc-onboard";
import Web3 from "web3";
import abi from "./abi"

let web3;

const onboard = Onboard({
  dappId: "abfa7356-64c3-4047-a6e1-cdb39a0c691e", // [String] The API key created by step one above
  networkId: 137,
  subscriptions: {
    wallet: (wallet) => {
      web3 = new Web3(wallet.provider);
      console.log(`${wallet.name} is now connected`);
    },
  },
  walletSelect: {
    wallets: [
      { walletName: "metamask", preferred: true },
      { walletName: "torus", preferred: true},
    ],
  },
});

function App() {
  const [txUrl, setTxUrl] = useState(null);

  const login = async () => {
    try {
      await onboard.walletSelect();
      await onboard.walletCheck();
      mintDappyDoge();
    } catch (error) {
      console.log(error);
    }
  };

  const mintDappyDoge = async () => {
    const from = (await web3.eth.getAccounts())[0];
    const contract = new web3.eth.Contract(abi, "0xf6BE367Ba794b063608C70922877481b91F20a93");

    // const mintBalance = await contract.methods.mintBalance(from).call()

    const {blockNumber} = await contract.methods.mintDoge().send({from, value: 0})
    setTxUrl(`https://explorer-mainnet.maticvigil.com/blocks/${blockNumber}/transactions`)
  };

  return (
    <div className="App">
      <header className="App-header">
        <span className="App-button" onClick={login}>
          Mint dAppy Doge on Polygon
        </span>
        <code className="App-signature" href={txUrl}>{txUrl}</code>
      </header>
    </div>
  );
}

export default App;
