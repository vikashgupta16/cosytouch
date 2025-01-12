let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a class="empty" href="">Cart is Empty</a>'

})

shopCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Trends At NZS</h1>
        <h1>Upto 50% Off ON Cloths</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})
const stripe = require('stripe')('your_stripe_secret_key');

// Create a payment session
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Example Product',
          },
          unit_amount: 1000, // $10
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  res.json({ url: session.url });
});
