let arr = [
    {
        name: "mountain sunrise",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        name: "ocean blue waves",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        name: "forest morning light",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        name: "city night lights",
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    },
    {
        name: "golden wheat field",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
        name: "desert sand dunes",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        name: "snowy mountain peak",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    {
        name: "rainy window mood",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
        name: "pink cosmos flower",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    },
    {
        name: "calm lake reflection",
        image: "https://images.unsplash.com/photo-1645668076185-83bc9ec013a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsbSUyMGxha2UlMjByZWZsZWN0aW9ufGVufDB8fDB8fHww",
    },
    {
        name: "street cat portrait",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    },
    {
        name: "coffee morning vibes",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
        name: "old vintage car",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    },
    {
        name: "tropical palm sunset",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        name: "busy market street",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    },
    {
        name: "cute puppy face",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
        name: "green leaf texture",
        image: "https://images.unsplash.com/photo-1649492470702-12f2ba3b69b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBsZWFmJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "river flowing calm",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    {
        name: "foggy forest walk",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
        name: "colorful street art",
        image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc",
    },
    {
        name: "summer beach walk",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        name: "misty bridge view",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        name: "yellow taxi street",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    },
    {
        name: "wild red flower",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    },
    {
        name: "mountain river flow",
        image: "https://images.unsplash.com/photo-1558734918-c63e2dbfb03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjByaXZlciUyMGZsb3d8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "city rooftop sunset",
        image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    },
    {
        name: "calm forest trail",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
        name: "night sky stars",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        name: "orange lily bloom",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
        name: "old wooden house",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
        name: "street night rain",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
        name: "blue butterfly wing",
        image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    },
    {
        name: "white daisy field",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    },
    {
        name: "vibrant market colors",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    },
    {
        name: "golden retriever smile",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
        name: "colorful hot air balloons",
        image: "https://images.unsplash.com/photo-1623770203836-71db5fc396ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JmdWwlMjBob3QlMjBhaXIlMjBiYWxsb29uc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "fern leaf closeup",
        image: "https://images.unsplash.com/photo-1627471039531-17ed3ad4048c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVybiUyMGxlYWYlMjBjbG9zZXVwfGVufDB8fDB8fHww",
    },
    {
        name: "old lighthouse view",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    {
        name: "vintage train station",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    },
    {
        name: "stormy cloud sky",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
];

function showTheCards(obj) {
    let clutter = "";
    arr.forEach((val) => {
        clutter += `<div class="box">
                        <img src="${val.image}">
                        <div class="caption">${val.name}</div>
                    </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality() {
    let input = document.querySelector("#searchinput");
    input.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block";
    });
    input.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none";
    });

    input.addEventListener("input", (event) => {
        let clutter = "";

        let filteredArr = arr.filter((item) =>
            item.name.toLowerCase().startsWith(input.value.toLowerCase())
        );

        filteredArr.forEach((obj) => {
            clutter += `
        <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>
        `;
        });

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    });
}
handleSearchFunctionality();
showTheCards();
