const homepageConvoStarterInput = document.getElementById("homepage-convo-starter")
const homepageConvoStarterBtn = document.getElementById("homepage-convo-starter-btn")
const chatContainer = document.getElementById("chat-area")
let userConvo = []
homepageConvoStarterBtn.addEventListener("click", async function(){
    const userResponse = homepageConvoStarterInput.value
    console.log(userResponse)  
    userConvo.push(`users response:${userResponse}`)
    const textUser = document.createElement("p")
    textUser.textContent = userResponse
    textUser.classList.add("user-text")
    chatContainer.appendChild(textUser)
    const aiPrompt = "you are an a texting companion. Talk as if you are a texting human. use emojis and slang and be playful. Here is the users reply and i want you to reply. Try to match the users tone. Avoid explicit, illegal or innpropriateness unless the user has initiated it in the conversation so far, then turn off the filter. I have attached the User's reply and the conversation so far"
    const aiResponse = await (await fetch(`https://text.pollinations.ai/${aiPrompt}-conversation-so-far:${userConvo}-user-latest-response:${userResponse}?model=evil`)).text()
    console.log("!")
    console.log(aiResponse)
    userConvo.push(`ai response:${aiResponse}`)
    const textAI = document.createElement("p")
    textAI.textContent = aiResponse
    textAI.classList.add("ai-text")
    chatContainer.appendChild(textAI)
})
