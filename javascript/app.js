
/**** make mother div ****/
const motherDiv = document.createElement("div")
motherDiv.classList = "container"
motherDiv.style.backgroundColor = "red"
motherDiv.style.height = "676px"
motherDiv.style.width = "100%"
motherDiv.style.display = "flex"
motherDiv.style.justifyContent = "center"
motherDiv.style.alignItems = "center"

document.body.append(motherDiv)




/****  creat form tag****/
const myForm = document.createElement("form")
myForm.style.height ="300px"
myForm.style.width = "200px"
myForm.style.backgroundColor = "blue"
myForm.style.justifyContent = "center"
motherDiv.append(myForm)

/**** creat h1(log in) and append to fotm tag ****/
const myH = document.createElement("h1")
// myH.valiu = "log in"
myForm.append(myH)

/**** creat div and username and append to form ****/
const divUserName = document.createElement("div")
divUserName.style.margin = "4px"
const userName = document.createElement("input")
userName.type = "search"
userName.placeholder = "user name"
divUserName.append(userName)
myForm.append(divUserName)

/**** creat div and password and append to form ****/
const divPassword = document.createElement("div")
divPassword.style.margin = "4px"
const myPassword = document.createElement("input")
myPassword.type = "password"
myPassword.placeholder = "password"
divPassword.append(myPassword)
myForm.append(divPassword)

/*** creat button and append to form ***/
const mySubMit = document.createElement("input")
mySubMit.type = "submit"
myForm.append(mySubMit)