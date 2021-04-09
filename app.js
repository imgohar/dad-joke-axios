const btn = document.querySelector("button");
const ul = document.getElementById("jokes");

const addJokes = async () => {
    const data = await getDadJoke();
    const jokeLi = document.createElement("li");
    jokeLi.append(data);
    ul.append(jokeLi);
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (error) {
        return "Sorry no joke please try again later :)";
    }
};

btn.addEventListener("click", addJokes);
