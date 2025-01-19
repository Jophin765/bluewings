const baseUrl = "http://localhost:5000/api";

// User Registration
document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${baseUrl}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        alert(data.message || "Registration successful!");
    } catch (error) {
        console.error("Error:", error);
        alert("Registration failed!");
    }
});

// User Login
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch(`${baseUrl}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        alert(data.message || "Login successful!");
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed!");
    }
});

// Flight Search
document.getElementById("flight-search-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    try {
        const response = await fetch(`${baseUrl}/flights/search?origin=${origin}&destination=${destination}&date=${date}&passengers=${passengers}`);
        const data = await response.json();
        const results = data.flights || [];
        const resultsDiv = document.getElementById("flight-results");
        resultsDiv.innerHTML = results.map(flight => `<p>${flight.details}</p>`).join("");
    } catch (error) {
        console.error("Error:", error);
        alert("Flight search failed!");
    }
});
