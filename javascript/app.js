
/**** make mother div ****/
const motherDiv = document.createElement("div")
motherDiv.classList = "container"
motherDiv.style.backgroundColor = "#a1a1a1"
motherDiv.style.height = "676px"
motherDiv.style.width = "100%"
motherDiv.style.display = "flex"
motherDiv.style.justifyContent = "center"
motherDiv.style.alignItems = "center"



document.body.append(motherDiv)




/****  creat form tag****/
const myForm = document.createElement("form")
myForm.style.height ="430px"
myForm.style.width = "350px"
myForm.style.backgroundColor = "black"
myForm.style.textAlign = "center"
myForm.style.display = "flex"
myForm.style.flexDirection = "column"
myForm.style.alignItems = "center"

myForm.style.boxShadow = "-5px -5px 10px rgba(255,255,255,0.1),5px 5px 10px rgb(0,0,0)"
// myForm.style.alignContent = "center"
motherDiv.append(myForm) 

/**** creat h1(log in) and append to fotm tag ****/
const myH = document.createElement("h1")
myH.style.color= "#fff"
myH.innerHTML ="Log in"
myForm.append(myH)

/**** creat div and username and append to form ****/
const divUserName = document.createElement("div")
divUserName.style.margin = "30px"
divUserName.style.height ="5px"

const userName = document.createElement("input")
userName.type = "search"
userName.placeholder = "user name"
userName.style.width = "205px"
userName.style.height = "25px"
userName.style.outline="0px"
userName.style.borderRadius ="6px" 
userName.style.border = "none"
divUserName.append(userName)
myForm.append(divUserName)

/**** creat div and password and append to form ****/
const divPassword = document.createElement("div")
divPassword.style.margin = "10px"
const myPassword = document.createElement("input")
myPassword.type = "password"
myPassword.placeholder = "password"
myPassword.style.width = "200px"
myPassword.style.height = "24px"
myPassword.style.outline="none"
myPassword.style.border ="none" 
myPassword.style.borderRadius ="6px" 
divPassword.append(myPassword)
myForm.append(divPassword)

/*** creat button and append to form ***/
const mySubMit = document.createElement("input")

mySubMit.type = "submit"
mySubMit.value = "Log in"
mySubMit.style.backgroundColor = "rgb(230)"
mySubMit.style.width = "208px"
mySubMit.style.height = "25px"
mySubMit.style.borderRadius = "10px"
mySubMit.style.border = "0px"
mySubMit.style.margin= "20px"


// mySubMit.style.height = "2px"
myForm.append(mySubMit)