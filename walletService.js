require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
const privateKey = process.env.HOT_WALLET_PRIVATE_KEY.startsWith('0x')
  ? process.env.HOT_WALLET_PRIVATE_KEY
  : '0x' + process.env.HOT_WALLET_PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey, provider);

// Wallet siap digunakan untuk transaksi
console.log("Wallet address:", wallet.address);
