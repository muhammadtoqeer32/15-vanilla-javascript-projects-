const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  let btn = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
  let dropdown = document.querySelectorAll(".dropdown select");
  for (select of dropdown){
    for(curr in countryList){
        let option = document.createElement("option");
        option.innerText = curr;
        option.value=curr;
        if(select.name === "from" && curr === "USD"){
            option.selected = "selected";
        }else if(select.name === "to" && curr === "PKR"){
            option.selected = "selected";
        }
        select.append(option);
    }
    select.addEventListener("change",(event)=>{
       update(event.target);
    })
  }
  const update= (element)=>{
    let curr = element.value;
    let counCode = countryList[curr];
    let nsrc = `https://flagsapi.com/${counCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = nsrc;
  }
    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();
    });
    const updateExchangeRate = async () => {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if (amtVal === "" || amtVal < 1) {
          amtVal = 1;
          amount.value = "1";
        }
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];
      
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
      };
      
      const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
      };
      
      btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        updateExchangeRate();
      });
      
      window.addEventListener("load", () => {
        updateExchangeRate();
      });