// React
import React, { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Stake from "../../components/Stake/Stake";
import Web3 from 'web3';
import StakeableABI from '../../ABI/Stakeable.json';
import { getTxList } from "./utils/etherApi";
import { MarketContext } from "../../context/MarketContext";

const index = () => {
  let web3;
  const [currentAccount, setCurrentAccount] = React.useState('');
  const [tokenIds, setTokenIds] = React.useState([]);

  const { stakedItems } = React.useContext(MarketContext);

  const getAccounts = async (provider) => {
    await window.ethereum.enable();
    const accountList = await provider.request({ method: "eth_accounts" });
    setCurrentAccount(accountList[0]);
  }
  React.useEffect(() => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      getAccounts(window.ethereum);
    }
  }, []);

  React.useEffect(async () => {
    if (currentAccount) {
      const temp = [];
      const txList = await getTxList(currentAccount);
      console.log("txList is ", txList);
      if (txList.length > 0) {
        txList.forEach((tx, index) => {
          if (!temp.includes(tx.tokenID)) {
            temp.push(tx.tokenID);
          }
          if (index === txList.length - 1) {
            console.log('temp is ', temp);
            setTokenIds(temp);
          }
        })

      }
    }
  }, [currentAccount, stakedItems]);

  React.useEffect(() => {
  }, [tokenIds])
  return (
    <Fragment>
      <Head>
        <title>Jacked | Stake</title>
        <link rel="shortcut icon" href="./images/Logos/E-Fill-White.png" />
      </Head>
      <Stake tokenIds={tokenIds} currentAccount={currentAccount} />
    </Fragment>
  );
};

export default index;
