const products = [
  {
    name: "Organic Snack Bowl",
    headline: "Healthy crunchy snack",
    price: 30,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"
  },
  {
    name: "Tortilla Nacho Chips",
    headline: "Crispy nachos with seasoning",
    price: 40,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Classic Potato Chips",
    headline: "Salted fried crispy chips",
    price: 25,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    name: "Snack Mix",
    headline: "Mixed golden crispy bites",
    price: 20,
    image: "https://images.unsplash.com/photo-1464219222984-216ebffaaf85"
  },
  {
    name: "Nachos with Salsa",
    headline: "Fresh nachos with red salsa dip",
    price: 45,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564"
  },
  {
    name: "Cheese Nachos",
    headline: "Cheesy loaded tortilla chips",
    price: 50,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];

const popularProducts = [
  {
    name: "Sleek Smartphone",
    headline: "Latest high-end smartphone model",
    price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    name: "Stylish Headphones",
    headline: "Wireless over-ear headphones with noise cancel",
    price: 199,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Designer Watch",
    headline: "Luxury wrist watch with premium leather strap",
    price: 249,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Modern Laptop",
    headline: "Ultralight laptop for creatives and professionals",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    name: "Premium Coffee Maker",
    headline: "Automatic espresso machine with grinder",
    price: 399,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },
  {
    name: "Compact Drone",
    headline: "Foldable drone with 4K camera and GPS",
    price: 499,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
  }
];




function imageShowcase(params) {
    let clutter = "";
products.forEach((element,index) => {
    clutter+=` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img src="${element.image}" alt="">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${element.name}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${element.headline}</h3>
                            <h4 class="font-semibold mt-2">$ ${element.price}</h4>
                        </div>
                        <button data-id='${index}' class=" add w-10 h-10 rounded-full shader text-yellow-400"><i data-id="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
});

document.querySelector('.products').innerHTML=clutter;
           
}


function popularProduct() {

    let clutter = '';
    popularProducts.forEach(element => {
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${element.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${element.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${element.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${element.price}</h4>
                    </div>
                </div>`
    });
    document.querySelector('.populars').innerHTML=clutter;
}


let cart = [];
function addToCart() {
    document.querySelector('.products').addEventListener('click',(event)=>{
         if (event.target.classList.contains('add')){
            cart.push(products[event.target.dataset.id]);
         }
    })
       
}

function showCart() {
    document.querySelector('.carticon').addEventListener("click", () => {

        document.querySelector('.cartexpnd').style.display = 'block';

        let clutter = '';
        cart.forEach((element, index) => {
            clutter += `
                <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg border overflow-hidden">
                        <img class="w-full h-full object-cover" src="${element.image}" alt="">
                    </div>
                    <div>
                        <h3 class="font-semibold">${element.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">$${element.price}</h5>
                    </div>
                </div>`;
        });

        document.querySelector('.cartexpnd').innerHTML = clutter;
    });
}

                


showCart();
addToCart();

popularProduct()

imageShowcase()
