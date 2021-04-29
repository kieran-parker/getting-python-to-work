const woc_api_url= "https://api.whatsonchain.com/v1/bsv/main/address/12c6kNuz1hzHSt6fC8pi7WtUXzmxz1wQ5x/balance"

async function  getwoc() {

const response= await fetch(woc_api_url);

const data = await response.json();


document.getElementById('CB').textContent=data.confirmed;
document.getElementById('UCB').textContent=data.unconfirmed;

    
} getwoc();
