function createXHR () {
    var XHR = [  
        function () { return new XMLHttpRequest() },
        function () { return new ActiveXObject("Msxml2.XMLHTTP") },
        function () { return new ActiveXObject("Msxml3.XMLHTTP") },
        function () { return new ActiveXObject("Microsoft.XMLHTTP") }
    ]
    var xhr = null;
    for (var i = 0; i < XHR.length; i ++) {
        try {
            xhr = XHR[i]()
        } catch(e) {
            continue 
        }
        break
    }
    return xhr;
}

let request =  function(url){
    return new Promise((resolve, reject) => {
        let xhr = createXHR()
        xhr.open('get',url)
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4) { 
                if (xhr.status == 200 || xhr.status == 0) {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
        }
        xhr.send()
    })
}

export default request

