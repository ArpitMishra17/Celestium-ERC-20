
# Celestium ERC-20 Token

  

This project implements an **ERC-20** token named **Celestium**, featuring a capped total supply and block rewards for miners. It includes smart contract code, unit tests, and deployment scripts for the **Ethereum Sepolia Testnet**.

  

## 📁 Project Structure

  

📂 Celestium-ERC20/ 
│── 📂 contracts/ # Smart contracts (Solidity) 
│── 📂 scripts/ # Deployment scripts 
│── 📂 test/ # Unit tests (Hardhat + Chai) 
│── 📄 hardhat.config.js # Hardhat configuration file 
│── 📄 package.json # Project dependencies 
│── 📄 .env # Environment variables (private keys, RPC URLs) 
│── 📄 README.md # Project documentation



## 🚀 Getting Started

### 1️⃣ Install Dependencies
Ensure you have **Node.js** installed. Then, install [Hardhat](https://hardhat.org/) and project dependencies([OpenZeppelin](https://www.openzeppelin.com/)):

```shell
npm init
npm i --save-dev hardhat
npm i @openzeppelin/contracts
```
### 2️⃣ Compile the Smart Contract

Before deployment, compile the contract using:

```shell
npx hardhat compile
```
### 3️⃣ Run Tests

Test the contract to verify functionality:
```shell
npx hardhat test
```
### 4️⃣ Deploy to Ethereum Sepolia Testnet ( or any other testnet)

#### 🔹 Step 1: Set Up Infura & Environment Variables

1.  Create an **Infura** project ([Guide Here](https://infura.io/)).
    
2.  Create a **`.env`** file in the root directory and add your credentials:
```shell
SEPOLIA_RPC_URL="https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY"
PRIVATE_KEY="your-wallet-private-key"
```
#### 🔹 Step 2: Deploy Using Hardhat

Run the following command to deploy your contract on Sepolia:
```shell
npx hardhat run --network sepolia scripts/deploy.js 
```
## 🧑‍💻 After Deployment

Once your contract is deployed, you can perform various checks using your wallet or a block explorer.

#### 🔹 Step 1: Check Contract Address

The deployment will output the contract address. Save it for future reference. You can interact with this address on block explorers like [Etherscan](https://sepolia.etherscan.io/).

Example output:
```shell
Contract deployed to: 0xYourContractAddress
```
#### 🔹 Step 2: Add the Token to Your Wallet

1.  Open your Ethereum wallet (e.g., MetaMask).
2.  Add a custom token by pasting your contract address.
3.  Your  token will appear in your wallet.
4.  You can now check balance in the assets section.


## 💌 Request Tokens

If you would like to receive some **Celestium** tokens, feel free to reach out! You can contact me via:


-   **Email**: mishrarpit3117@gmail.com

  



## 📜 License

This project is licensed under the **MIT License**.