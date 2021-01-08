# Election


This is my Election DAPP which helps to cast Vote safely and the contracts are deployed on local Ethereum Blockchain using Ganache. 


### Dependencies Download Links for Linux :

+ [Truffle](https://medium.com/@techgeek628/how-to-install-and-execute-truffle-on-an-ubuntu-16-04-7ebb3444707e) 

+ [NPM](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)

+ [Ganache](https://www.trufflesuite.com/ganache) 

To run Ganache we have to download the AppImage file from the link here and to run Gaache follow the commands listed below :

`chmod +x ganache-2.5.4-linux-x86_64.AppImage`
`chmod +x ganache-2.5.4-linux-x86_64.AppImage`

+ [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en)

## Follow these Steps to run the Project :

### Step 1 : Clone this Repo 

`https://github.com/Aryan2601/Election.git`

![Screenshot from 2021-01-08 19-48-22](https://user-images.githubusercontent.com/56226813/104025421-9e99aa80-51ea-11eb-87e4-45376e458e06.png)

### Step 2 : Install all the Dependencies 

`$cd Election`

`$npm install`

### Step 3 : Start Ganache

follow the steps below to start Ganache :

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56226813/104027848-fdacee80-51ed-11eb-8c4f-5930efa95d99.gif)

After your Ganache opens click on Quickstart Ethereum which will create a local Blockchain and give access to free accounts which we can use in Metamask

![Screenshot from 2021-01-08 20-15-31](https://user-images.githubusercontent.com/56226813/104028148-65fbd000-51ee-11eb-98e8-c8ff64af9e55.png)

### Step 4 : Deploy Election Smart Contract 

To deploy Smart Contract we must Migrate the Election Smart contract each tme we start Ganache 

`truffle migrate --reset`

![Screenshot from 2021-01-08 20-21-40](https://user-images.githubusercontent.com/56226813/104028810-2e415800-51ef-11eb-87de-7836aa84c50b.png)

here this deploys the contract to local Ethereum Blockchain 

### Step 5 : Setup Metamask 

+ Open Metamask 

![Screenshot from 2021-01-08 20-24-10](https://user-images.githubusercontent.com/56226813/104029086-8c6e3b00-51ef-11eb-89c0-ab37a16fad29.png)

+ Now create a local Network using Custom RPC 

Add the URL given : `HTTP://127.0.0.1:7545`

![Screenshot from 2021-01-08 20-26-28](https://user-images.githubusercontent.com/56226813/104029396-eff86880-51ef-11eb-9de4-10797f2d9570.png)

+ after creating local network now switch to local network and then select on import account 

![Screenshot from 2021-01-08 20-28-34](https://user-images.githubusercontent.com/56226813/104029540-1f0eda00-51f0-11eb-9759-189735967292.png)


+ now it will ask for Private key select the private key of the block that is used for your contract in Ganache and paste the private key 

![Screenshot from 2021-01-08 20-30-19](https://user-images.githubusercontent.com/56226813/104029833-7c0a9000-51f0-11eb-8b77-4963433895e9.png)

![Screenshot from 2021-01-08 20-30-34](https://user-images.githubusercontent.com/56226813/104029894-904e8d00-51f0-11eb-9034-d7f20d276c31.png)


+ now cpoy the Private key and paste it to import account section and click on save :

![Screenshot from 2021-01-08 20-33-40](https://user-images.githubusercontent.com/56226813/104030074-d572bf00-51f0-11eb-805c-7fb05242de1b.png)

now the account is imported which was provided by Ganache.

### Step 6 : Run the DAPP 

To run the DAPP use command  `$npm run dev` and follow the link : [ http://localhost:3000]( http://localhost:3000) in your browser and it will run the DAPP 


![Screenshot from 2021-01-08 20-37-05](https://user-images.githubusercontent.com/56226813/104030382-529e3400-51f1-11eb-9b14-814ecea4436b.png)

Now select the candidate and cast your Vote.

![Screenshot from 2021-01-08 20-39-34](https://user-images.githubusercontent.com/56226813/104030636-b6286180-51f1-11eb-8fa8-894ba533cff2.png)

Click on Confirm to make the transaction and vote.





 
