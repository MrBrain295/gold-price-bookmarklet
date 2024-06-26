async function goldPrice() {
  const apiUrl = "https://live-metal-prices.p.rapidapi.com/v1/latest/XAU/USD";
  const fetchOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "", // put your API key in the quotation marks
      "x-rapidapi-host": "live-metal-prices.p.rapidapi.com",
    },
  };
  try {
    let t = await fetch(apiUrl, fetchOptions);
    if (!t.ok) throw Error(`Failed to fetch gold price. Status: ${t.status}`);
    let a = await t.json(),
      o = a.rates.XAU;
    alert("The current price for one ounce of gold is $" + o + ".");
  } catch (c) {
    console.error("An error occurred:", c);
  }
}
goldPrice();
