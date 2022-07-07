let $ = document 

/////////////////////////////////

// variables ///////////////////
const body = $.body

//fucntions /////////////////////
function changeTheme(event){
    let themeColor = event.target.dataset.color
    document.documentElement.style.setProperty("--theme-color" , themeColor)
}