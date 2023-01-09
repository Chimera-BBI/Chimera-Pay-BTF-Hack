

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
else{
    console.log("no wallet available")
}

// Initialize the list of accounts
let accounts = [];


// Asynchronously get the accounts from the Ethereum network
async function getAccounts(accounts) {
    // Send a request to the Ethereum network to get the accounts
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
}


// Select the Ethereum enable button and send Ethereum button elements
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');


// Add click event listener to the Ethereum enable button
ethereumButton.addEventListener('click', () => { getAccounts(); });


async function get_chain_id() {
    

    const provider = window.ethereum;
    chainId = await provider.request({ method: "eth_chainId" });
    console.log(chainId)
    const binanceTestChainId = '0x1';

    if(chainId === binanceTestChainId){
    console.log("Bravo!, you are on the correct network");
    }else{
    console.log("oulalal, switch to the correct network")
    }

    

}

// chainId = await get_chain_id();


