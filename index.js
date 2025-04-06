const homepageConvoStarterInput = document.getElementById("homepage-convo-starter")
const homepageConvoStarterBtn = document.getElementById("homepage-convo-starter-btn")
const chatContainer = document.getElementById("chat-area")

homepageConvoStarterBtn.addEventListener("click", async function(){
    const userResponse = homepageConvoStarterInput.value
    console.log(userResponse)  
    const textUser = document.createElement("p")
    textUser.textContent = userResponse
    chatContainer.appendChild(textUser)
    const aiPrompt = "you are an AI for my AI language practice penpal site. Here is the users reply and i want you to reply"
    const aiResponse = await (await fetch(`https://text.pollinations.ai/${aiPrompt}${userResponse}`)).text()
    console.log("!")
    console.log(aiResponse)
    const textAI = document.createElement("p")
    textAI.textContent = aiResponse
    chatContainer.appendChild(textAI)
})