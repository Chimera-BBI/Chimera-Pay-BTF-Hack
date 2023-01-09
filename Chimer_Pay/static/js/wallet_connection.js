

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
    const GorliTestChainId = '0x5';

    if(chainId === GorliTestChainId){
    console.log("Bravo!, you are on the correct network");
    }else{
    console.log("oulalal, switch to the correct network");

    try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: GorliTestChainId}],
        });
      console.log("You have succefully switched to Goreil Test network")
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
         console.log("This network is not available in your metamask, please add it")
        }
        console.log("Failed to switch to the network")
      }


    }

    

}

get_chain_id();

// chainId = await get_chain_id();


