const express = require('express');

let app = express();
const port = process.env.PORT || 8001;

const explorerApi = require('./api/ExplorerApi.ts');
<<<<<<< HEAD
const neutrinoContractAddress = "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo";
// const neutrinoContractAddress = "3MxUeE9rS9G3ap3kSrw67vkjYyTL3QLJnk3";
const nodeUrl = "https://nodes.wavesplatform.com/";
// const nodeUrl = "http://testnode1.wavesnodes.com/";

// Helper Functions
async function connectExplorerApi(nodeUrl, neutrinoContractAddress){
  try {
    return await explorerApi.ExplorerApi.create(nodeUrl, neutrinoContractAddress);
  } catch(error){
    console.log(error)
    process.exit(1)
  }
}
=======

const neutrinoContractAddress = process.env.CONTRACT_ADDRESS;
const nodeUrl = process.env.NODE_URL;
>>>>>>> master

let explorerApiObject;
(async function () {
  explorerApiObject = await explorerApi.ExplorerApi.create(
    nodeUrl,
    neutrinoContractAddress
  );
})();

// console.log(explorerApiObject);

// -------------------
app.get('/api/get_current_price', async (req, res) => {
  try {
    let result = await explorerApiObject.getPrice();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_current_balance', async (req, res) => {
  try {
    let result = await explorerApiObject.getBalance();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_total_issued', async (req, res) => {
  try {
    let result = await explorerApiObject.getTotalIssued();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_staked', async (req, res) => {
  try {
    let result = await explorerApiObject.getStaked();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_annual_yield', async (req, res) => {
  try {
    let result = await explorerApiObject.getAnnualYield();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_annual_yield_analytical', async (req, res) => {
  try {
    let result = await explorerApiObject.getAnnualYieldAnalytical();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_circulating_supply', async (req, res) => {
  try {
    let result = await explorerApiObject.getCirculatingSupply();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_deficit', async (req, res) => {
  try {
    let deficit = await explorerApiObject.getDeficit();

    res.status(200).send(deficit.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_decimals', async (req, res) => {
  try {
    let result = await explorerApiObject.getDecimals();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_circulating_supply_no_dec', async (req, res) => {
  try {
    let result = await explorerApiObject.getCirculatingSupplyNoDec();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_price_blocks', async (req, res) => {
  try {
    let start = req.query.start;
    let end = req.query.end;

    let result = await explorerApiObject.getPriceBlocks(start, end);

    res.setHeader('Content-Type', 'application/json');

    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_locked_for_swap', async (req, res) => {
  try {
    let result = await explorerApiObject.getLockedForSwap();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_deficit_per_cent', async (req, res) => {
  try {
    let result = await explorerApiObject.getDeficitPerCent();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_total_bonds_rest', async (req, res) => {
  try {
    let result = await explorerApiObject.getTotalBondsRest();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/get_total_liquidation', async (req, res) => {
  try {
    let result = await explorerApiObject.getTotalLiquidation();

    res.status(200).send(result.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Listener
let server = app.listen(port, function () {
  console.log('Running express-api on port ' + port);
});
