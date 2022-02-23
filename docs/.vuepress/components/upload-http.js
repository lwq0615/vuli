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

let request =  function(url,data,options,headers,body){
    return new Promise((resolve, reject) => {
        let xhr = createXHR()
        xhr.open('post',url)
        let formData = new FormData()
        formData.append('file',data)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) { 
                if (xhr.status == 200 || xhr.status == 0) {  
                    resolve(xhr.responseText)
                }
            }
        }
        if(headers){
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key,headers[key])
            })
        }
        if(body){
            Object.keys(body).forEach(key => {
                formData.append(key,body[key])
            })
        }
        if(options){
            xhr.upload.onprogress = options.onprogress || null
            xhr.onload = options.onload || null
            xhr.onloadend = options.onloadend || null
            xhr.onerror = options.onerror || null
        }
        xhr.send(formData)
    })
}
export default request

