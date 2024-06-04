const apiUrl = "https://live-metal-prices.p.rapidapi.com/v1/latest/XAU/USD";
const fetchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "", // put your API key in the quotation marks
    "x-rapidapi-host": "live-metal-prices.p.rapidapi.com",
  },
};

async function goldPrice() {
  try {
    let t = await fetch(apiUrl, fetchOptions);
    if (!t.ok) throw new Error(`Failed to fetch gold price. Status: ${t.status}`);
    let a = await t.json();
    let o = a.rates.XAU;
    alert("The current cost of gold is $" + o);
  } catch (c) {
    console.error("An error occurred:", c);
  }
}

goldPrice();
