const restaurantList = document.getElementById("restaurant-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const restaurantName = document.getElementById("restaurant-name");
const restaurantAddress = document.getElementById("restaurant-address");
const menuList = document.getElementById("menu-list");
const USE_API = false;
const RESTAURANT_API_URL = "https://your-school-api/restaurant";
const mockRestaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    address: "123 kyyshmaki",
    menu: [
      { name: "Margherita", price: 8.5 },
      { name: "Pepperoni", price: 9.5 },
      { name: "Hawaiian", price: 10 }
    ]
  },
  {
    id: 2,
    name: "Sushi World",
    address: "mattinkyla",
    menu: [
      { name: "Salmon Roll", price: 12 },
      { name: "Tuna Roll", price: 13 },
      { name: "Avocado Roll", price: 9 }
    ]
  },
  {
    id: 3,
    name: "Burger Town",
    address: "lepavara",
    menu: [
      { name: "Classic Burger", price: 7 },
      { name: "Cheeseburger", price: 8 },
      { name: "Veggie Burger", price: 7.5 }
    ]
  }
];
function displayRestaurants(restaurants) {
  restaurantList.innerHTML = "";
  restaurants.forEach(r => {
    const div = document.createElement("div");
    div.textContent = r.name;
    div.addEventListener("click", () => showRestaurantDetails(r.id, restaurants));
    restaurantList.appendChild(div);
  });
}
function showRestaurantDetails(id, restaurants) {
  let restaurant = restaurants.find(r => r.id === id);

  if (USE_API) {
    fetch(`${RESTAURANT_API_URL}/${id}/menu/today`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch menu: ${res.status}`);
        return res.json();
      })
      .then(data => {
        restaurantName.textContent = data.restaurant.name;
        restaurantAddress.textContent = data.restaurant.address;
        menuList.innerHTML = "";
        data.menu.forEach(item => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - ${item.price}€`;
          menuList.appendChild(li);
        });
        modal.style.display = "flex";
      })
      .catch(err => {
        console.error(err);
        alert("Error fetching restaurant details. Ensure you are on the school network or VPN.");
      });
  } else {
    restaurantName.textContent = restaurant.name;
    restaurantAddress.textContent = restaurant.address;
    menuList.innerHTML = "";
    restaurant.menu.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}€`;
      menuList.appendChild(li);
    });
    modal.style.display = "flex";
  }
}
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
function fetchRestaurants() {
  if (USE_API) {
    fetch(RESTAURANT_API_URL)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch restaurants: ${res.status}`);
        return res.json();
      })
      .then(data => displayRestaurants(data))
      .catch(err => {
        console.error(err);
        restaurantList.innerHTML = "<p>Error fetching restaurants. Ensure you are on the school network or VPN.</p>";
      });
  } else {
    displayRestaurants(mockRestaurants);
  }
}
fetchRestaurants();