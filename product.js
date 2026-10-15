const tablebody = document.querySelector("#storeFront");


const sampleProduct = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
            rate: 3.9,
            count: 120
        }
    }


function createProductRow(title, price, category, rate, image,id) {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const rateCell = document.createElement("td");
    const imageCell = document.createElement("td");
    const idCell = document.createElement("td");

    const makeTD = (text) => {
        const td = document.createElement("td");
        td.innerText  = text;
        return td;
    }
    const makeIMG = (src) => {
        const img = document.createElement("img");
        img.src = src;
        img.width = 100;
        return img;
    }


row.appendChild(makeIMG(image));
row.appendChild(makeTD(title));
row.appendChild(makeTD(price + '$'));
row.appendChild(makeTD(category));
row.appendChild(makeTD(rate + '⭐'));
row.appendChild(makeTD("th-"+id));



    return row
}

tablebody.appendChild(createProductRow(
    sampleProduct.title,
    sampleProduct.price,
    sampleProduct.category,
    sampleProduct.rating.rate,
    sampleProduct.image,
    sampleProduct.id
));