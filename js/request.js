function request(method, url) {
    return new Promise((resolve, reject) => {
        let xmlReq = new XMLHttpRequest;
        xmlReq.onreadystatechange = () => {
            if(xmlReq.readyState === 4 && xmlReq.status === 200) {
                resolve(JSON.parse(xmlReq.responseText))
            }
        }

        xmlReq.onerror = () => {
            reject(xmlReq.responseText)
        }

        xmlReq.onprogress = (e) => {
            console.log(e.loaded + "/" + e.total)
        }

        if(method === "GET") {
            xmlReq.open(method, url)
            xmlReq.send()
        }
    })
}