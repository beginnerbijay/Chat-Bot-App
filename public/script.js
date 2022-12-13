const inputValue = document.getElementById("input");
const messagesContainer = document.getElementById("messages");
document.addEventListener("DOMContentLoaded", () => {
  inputValue.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputValue.value;
      inputValue.value = "";
      let userDiv = document.createElement("div");
      let userText = document.createElement("span");
      userDiv.id = "user";
      userDiv.className = "user response";
      userText.innerHTML = `${input}`;
      userDiv.appendChild(userText);
      messagesContainer.appendChild(userDiv);
      addChat(input);
    }
  });
});

async function addChat(prompt) {
  try {
    const { data } = await axios.post("/", { prompt });
    if (data) {
      const botres = data.split("\n").join("");
      output(botres);
    } else {
      alert("something went worng");
    }
  } catch (e) {
    console.log(e);
  }
}

function output(product) {
    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
  botText.innerText = `${product}`;
}
