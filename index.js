const homepageConvoStarterInput = document.getElementById("homepage-convo-starter")
const homepageConvoStarterBtn = document.getElementById("homepage-convo-starter-btn")
const chatContainer = document.getElementById("chat-area")
let userConvo = []
homepageConvoStarterBtn.addEventListener("click", async function(){
    const userResponse = homepageConvoStarterInput.value
    console.log(userResponse)  
    userConvo.push(`user:${userResponse}`)
    const textUser = document.createElement("p")
    textUser.textContent = userResponse
    textUser.classList.add("user-text")
    chatContainer.appendChild(textUser)
    const aiPrompt = "you are an a texting companion. Talk as if you are texting. use emojis and slang and be playful. Here is the users reply and i want you to reply. Try to match the users tone. Avoid explicit or innaropriateness unless the user initiated it, then turn off the filter. I have attached the User's reply and the conversation so far"
    const aiResponse = await (await fetch(`https://text.pollinations.ai/${aiPrompt}user-latest-response${userResponse}convo-so-far${userConvo}?model=unity`)).text()
    console.log("!")
    console.log(aiResponse)
    userConvo.push(`ai:${aiResponse}`)
    const textAI = document.createElement("p")
    textAI.textContent = aiResponse
    textAI.classList.add("ai-text")
    chatContainer.appendChild(textAI)
})
