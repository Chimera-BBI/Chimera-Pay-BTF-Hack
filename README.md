# Default OTP for testing
- opensesame
# Chimera-Pay-BTF-Hack
This reop is for submission for the Build the future hack

To run the Chimera Pay application:

- Install Python and the required packages listed in the requirements.txt file.
- Add the necessary keys to the keys.yml file for connecting to the various services.
- Ensure that you are using the Goerli test network for Ethereum payments. Stablecoin payments are currently under development.
- The backend of Chimera Pay uses Python and the Flask framework.
- Chimera Pay uses AWS services and a Coinbase node.
- User session management is handled using Cognito.
- The database for Chimera Pay is a PostgreSQL instance in Amazon RDS.

For more information on deploying applications on AWS, you can refer to the AWS documentation at the following link: https://docs.aws.amazon.com/getting-started/


Product features:
1. Connect your mobile phone number using OTP (one-time password).
2. Connect a Coinbase wallet or Metamask on the Goerli testnet.
3. View your ETH balance.
4. View your USDC balance (currently under development).
5. Send ETH to registered mobile phone numbers.
6. Send stablecoin (USDC) to registered mobile phone numbers (currently under development).
7. View transactions (currently under development).

