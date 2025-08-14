let html;
let css;
let js;
let code;
let name;
let loop;
let blob;
css = document.getElementById("css").value
html = document.getElementById("html").value
js = document.getElementById("css").value
function output(s) {
    document.getElementById("cooo").innerHTML += `<br>${s}<hr>`
}
function conn() {
    console.log("hgj")
    js = document.getElementById("js").value.replaceAll("console.log", "output")
    console.log(js)
    // js = document.getElementById("js").value.replaceAll("console.error", "output")
    document.getElementById("cooo").open = true
    console.log(js)
    eval(js)
}
function run() {
    css = document.getElementById("css").value
    html = document.getElementById("html").value
    js = document.getElementById("js").value
    
    if(html.includes("</body>")){
        html = html.replace("</body>", "<script>"+ js +"</script>\n</body>")
    }else{
        html = html+ "\n" + "<script>"+ js +"</script>"
    }
    code = `<style>${css}</style>${html}`
    document.getElementById("run").srcdoc = code
    
}
function openn(file) {
    console.log(localStorage.key(file))
    code = localStorage.getItem(localStorage.key(file)).split(",*&")
    document.getElementById("name").value = localStorage.key(file)
    document.getElementById("html").value = code[0] || ''
    document.getElementById("css").value = code[1] || ''
    document.getElementById("js").value = code[2] || ''
}
function opennn(file) {
    
    css = document.getElementById("css").value
    html = document.getElementById("html").value
    js = document.getElementById("js").value
    code = `<style>${css}</style>${html}`
    document.getElementById("runn").srcdoc = code
    document.querySelector("dialog").open = true
    eval(js)
}
function save() {
    name = document.getElementById("name").value
    css = document.getElementById("css").value
    html = document.getElementById("html").value
    js = document.getElementById("js").value
    if(document.getElementById("name").value){
        code = `${html},*&${css},*&${js}`
        localStorage.setItem(name, code)
        alert("Saved successful")

    }else{
        alert("Please name your code")
    }
}
function deletee(file) {
    sure = confirm("Are you sure you want to delete?")
    if (sure) {
        localStorage.removeItem(localStorage.key(file))
        
    } else {
        //pass
    }
    
}
function newFile() {
    sure = confirm("Do you want to continue without saving?")
    if(sure){
        css = document.getElementById("css").value = ''
        html = document.getElementById("html").value = ''
        js = document.getElementById("js").value = ''
    }else{
        //pass
    }
    
}
function cal() {
    document.querySelector("dialog").open = false
}function call() {
    document.getElementById("cooo").open = false
}
function nnnn(lang) {
    document.getElementById(`l${lang}`).innerHTML = ''
    loop = document.getElementById(lang).value.split('\n')
    for (let index = 0; index < loop.length; index++) {
        document.getElementById(`l${lang}`).innerHTML += index+1+'<br>'
    }
                
}
document.getElementById("html").addEventListener('keypress', (e)=>{
    // if(e.key === "<"){
    //     document.getElementById("html").setRangeText('>', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
    // }
    console.log(e.key)
    
    if(e.key === "("){
        document.getElementById("html").setRangeText(')', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
        console.log("hjdaa")
    }
    if(e.key ===  "<"){
        document.getElementById("html").setRangeText('>', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
        console.log("hjhhhhhdaa")
    }
    if(e.key ===  "\""){
        document.getElementById("html").setRangeText('\"', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
    }
    if(e.key ===  "\'"){
        document.getElementById("html").setRangeText('\'', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
    }
    if(e.key ===  "["){
        document.getElementById("html").setRangeText(']', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
        console.log("hjdaffgfa")
    }
    if(e.key === "{"){
        document.getElementById("html").setRangeText('}', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
    }
        

    
    
})

document.getElementById("css").addEventListener('keypress', (e)=>{
    // if(e.key === "<"){
    //     document.getElementById("html").setRangeText('>', document.getElementById("html").selectionStart, document.getElementById("html").selectionEnd)
    // }
    console.log(e.key)
    
    if(e.key === "("){
        document.getElementById("css").setRangeText(')', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
        console.log("hjdaa")
    }
    if(e.key ===  "<"){
        document.getElementById("css").setRangeText('>', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
        console.log("hjhhhhhdaa")
    }
    if(e.key ===  "\""){
        document.getElementById("css").setRangeText('\"', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
    }
    if(e.key ===  "\'"){
        document.getElementById("css").setRangeText('\'', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
    }
    if(e.key ===  "["){
        document.getElementById("css").setRangeText(']', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
        console.log("hjdaffgfa")
    }
    if(e.key === "{"){
        document.getElementById("css").setRangeText('\n \n}', document.getElementById("css").selectionStart, document.getElementById("css").selectionEnd)
    }
        

    
    
})
document.getElementById("js").addEventListener('keypress', (e)=>{
    // if(e.key === "<"){
    //     document.getElementById("js").setRangeText('>', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    // }
    console.log(e.key)
    
    if(e.key === "("){
        document.getElementById("js").setRangeText(')', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjdaa")
    }
    if(e.key ===  "<"){
        document.getElementById("js").setRangeText('>', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjhhhhhdaa")
    }
    if(e.key ===  "\""){
        document.getElementById("js").setRangeText('\"', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
    if(e.key ===  "\'"){
        document.getElementById("js").setRangeText('\'', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
    if(e.key ===  "["){
        document.getElementById("js").setRangeText(']', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjdaffgfa")
    }
    if(e.key === "{"){
        document.getElementById("js").setRangeText('\n  \n}', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
        

    
    
})


document.getElementById("html").addEventListener("scroll", ()=>{
    document.getElementById("lhtml").scrollTop = document.getElementById("html").scrollTop
})
document.getElementById("lhtml").addEventListener("scroll", ()=>{
    document.getElementById("html").scrollTop = document.getElementById("lhtml").scrollTop
})
document.getElementById("css").addEventListener("scroll", ()=>{
    document.getElementById("lcss").scrollTop = document.getElementById("css").scrollTop
})
document.getElementById("lcss").addEventListener("scroll", ()=>{
    document.getElementById("css").scrollTop = document.getElementById("lcss").scrollTop
})
document.getElementById("js").addEventListener("scroll", ()=>{
    document.getElementById("ljs").scrollTop = document.getElementById("js").scrollTop
})
document.getElementById("ljs").addEventListener("scroll", ()=>{
    document.getElementById("js").scrollTop = document.getElementById("ljs").scrollTop
})
function downl(name){
    css = document.getElementById("css").value
    html = document.getElementById("html").value
    js = document.getElementById("js").value
    
    if(html.includes("</body>")){
        html = html.replace("</body>", "<script>"+ js +"</script>\n</body>")
    }else{
        html = html+ "\n" + "<script>"+ js +"</script>"
    }
    data = `<style>${css}</style>${html}`
    blob = new Blob([data], {type : "text/plsin"})
    var url = URL.createObjectURL(blob)
    var a = document.createElement("a")
    a.href = url
    a.download = name+".html"
    a.click()
    URL.revokeObjectURL()
}