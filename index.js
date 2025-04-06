const homepageConvoStarterInput = document.getElementById("homepage-convo-starter")
const homepageConvoStarterBtn = document.getElementById("homepage-convo-starter-btn")
const chatContainer = document.getElementById("chat-area")

homepageConvoStarterBtn.addEventListener("click", async function(){
    const userResponse = homepageConvoStarterInput.value
    console.log(userResponse)  
    const textUser = document.createElement("p")
    textUser.textContent = userResponse
    textUser.classList.add("user-text")
    chatContainer.appendChild(textUser)
    const aiPrompt = "you are an AI for my AI language practice penpal site.Talk as if you are texting. use emojis and slang and be playful. Here is the users reply and i want you to reply. User's reply:"
    const aiResponse = await (await fetch(`https://text.pollinations.ai/${aiPrompt}${userResponse}`)).text()
    console.log("!")
    console.log(aiResponse)
    const textAI = document.createElement("p")
    textAI.textContent = aiResponse
    textAI.classList.add("ai-text")
    chatContainer.appendChild(textAI)
})
