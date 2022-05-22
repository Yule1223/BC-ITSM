# SLink front-end

### Ethereum address of the smart contract and its creator (provider)
SLink allows you to configure the address of the smart contract, as well as that of its creator (who is considered the service provider).

You can configure the smart contract address in the ***Contract.js*** file, in the ***contractAddress*** variable.

You can configure the address of the owner of the smart contract in the ***config.js*** file, in the ***slinkConfig.provider*** variable.

*(Contract file with examples is in: **/yujo/src/Contract.js**).*

*(Config file with examples is in: **/yujo/src/config.js**).*

### Configuration file:
Slink allows too you to configure the components of the SLAs:
- **Services**: SLA services. Each one has the fields:
  - ID.
  - Name.
  - Description.
  - Price.
  - Price periodicity.
  - Price sometimes (indicates if the price is included directly in the sla total).
- **Extra services**: SLA extra services. Each one has the fields:
  - ID.
  - Name.
  - Description.
  - Price.
  - Price periodicity.
  - Price sometimes (indicates if the price is included directly in the sla total).
- **Service spaces**: SLA service spaces. Each one has the fields:
  - ID.
  - Name.
  - Start time.
  - End time.
  - Price time.
  - Price periodicity.
  - Price sometimes (indicates if the price is included directly in the sla total).
- **Licenses**: SLA licenses. Each one has the fields:
  - ID.
  - Name.
- **Service levels**: SLA service levels.
- **Revision report**: SLA revision report periodicity. Each one has the fields:
  - ID.
  - Price.
  - Price periodicity.
  - Price sometimes (indicates if the price is included directly in the sla total).
- **Billings**: SLA billings periodicity. Each one has the fields:
  - ID.
  - Periodicity.
- **Billing methods**: SLA billing methods. Each one has the fields:
  - ID.
  - Name.

*(For each name and description, the translation in Spanish and English must be provided).*

*(Config file with examples is in: **/yujo/src/config.js**).*

### Steps to deploy frontend server:
First to all, you need to have SLink back-end with everything you need. You can consult all the information and code necessary for it [here](https://github.com/JoseVelascoSantos/BC-ITSM-BE).

Next, you need to have Node.js installed on your machine. If you don't have it, visit the [Node page](https://nodejs.org/) and follow the installation steps for your environment.

Then, from a console, run the following commands to start at 3000 port:
```
npm install
cd yujo/
npm start
```
