function ajax(type, url, data) {
  const xhr = new XMLHttpRequest()
  xhr.open(type, url)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        let string = xhr.request.responseText
        let obj = JSON.parse(string)
      }
    }
  }
  xhr.send(data)
}