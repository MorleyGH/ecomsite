var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let title =  newQuery(xhttp.responseXML, "electronicsstore/electronics/title"); // returns an array of all titles
       let image =  newQuery(xhttp.responseXML, "electronicsstore/electronics/image"); // retyrns an array of all images
       let price =  newQuery(xhttp.responseXML, "electronicsstore/electronics/price"); // returns an array of all prices
       let product = [title, image, price]; // places all inside of one array
       generatePage(product) 
    }
};
xhttp.open("GET", "xml.xml", true);
xhttp.send(); 


// loops through each item and replaces the data in the html with the xml
function generatePage(product) {
    let txt = "";
    for (let i = 0; i< product[0].length; i++) {
        txt += `    
        <div class="swiper-slide" style="margin: 10px;">
        <div class="slider-box">
          <p class="time">New</p>
          <div class="img-box">
            <img src="${product[1][i]}">
          </div>
      
          <p id="parse" class="desc">${product[0][i]}</p>
          <a href="#" class="price">Price - ${product[2][i]}</a>
          <div class="cart">
            <a href="#">Add to cart</a>
          </div>
        </div>
      </div>          
        `;
        //
        document.getElementById("swiper-wrapper").innerHTML = txt;
    }
}

// pushes to an array and returns xml content
function newQuery(xml, path) {
    let xmlOutput = [];
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            xmlOutput.push(result.childNodes[0].nodeValue)
            result = nodes.iterateNext();
        } 
    }
    return xmlOutput;
}