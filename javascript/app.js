/**** make mother div ****/
const motherDiv = document.createElement("div")
motherDiv.classList = "container"
document.body.append(motherDiv)




/****  creat form tag****/
const myForm = document.createElement("form")
motherDiv.append(myForm)
console.log(motherDiv)


/**** creat div and username and append to form ****/
const divUserName = document.createElement("div")
const userName = document.createElement("input")
userName.type = "search"
userName.placeholder = "user name"
divUserName.append(userName)
myForm.append(divUserName)

/**** creat div and password and append to form ****/
const divPassword = document.createElement("div")
const myPassword = document.createElement("input")
myPassword.type = "password"
myPassword.placeholder = "password"
divPassword.append(myPassword)
myForm.append(divPassword)

/*** creat button and append to form ***/
const myButt