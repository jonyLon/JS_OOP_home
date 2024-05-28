class Circle {
  // #radius
  constructor() {
  }

  getRadius() {
    return this.radius
  }
  setRadius(val) {
    this.radius = val
  }
  getDiameter() {
    return this.getRadius() * 2
  }
  calcArea() {
    return Math.PI * this.getRadius() ** 2
  }
  calcLength() {
    return Math.PI * this.getDiameter()
  }

  printAll() {
    document.body.style = "text-align:center;"
    document.write(`<h1>Circle</h1>`)
    document.write(`<h3>Radius: ${this.getRadius()}</h3>`)
    document.write(`<h3>Diameter: ${this.getDiameter()}</h3>`)
    document.write(`<h3>Area: ${this.calcArea().toFixed(2)}</h3>`)
    document.write(`<h3>Length: ${this.calcLength().toFixed(2)}</h3>`)
  }

}
var cir = new Circle()
cir.setRadius(5)
// cir.printAll()



class HtmlElement {
  #startTag = ""
  #endSecondTag = ""
  #endTag = ">"
  #innerText = ""
  #attr = []
  #styles = []
  #innerTegs = []
  constructor(name) {
    this.setTagName(name)
  }

  setTagName(name) {
    this.#startTag = `<${name}`
    this.#endSecondTag = `</${name}>`
  }

  setInnerText(text) {
    this.#innerText = text
  }

  setAttr(val) {
    this.#attr.push(val);
  }
  setStyle(val) {
    this.#styles.push(val);
  }

  setInnerTags(val) {
    if (val instanceof HtmlElement) {
      this.#innerTegs.push(val.getHtml())
    }
    else {
      console.error("setInnerTags() : An attempt to set something else!")
    }
  }

  getHtml() {
    // if (this.#name == "img") {
    //   this.getHtmlImg()
    // }
    // else {
    return `${this.#startTag} ${this.#attr.join(" ")} style="${this.#styles.join(';')}" ${this.#endTag} ${this.#innerTegs.length > 0 ? this.#innerTegs.join(" ") : this.#innerText} ${this.#endSecondTag}`
    // }
  }
  // getHtmlImg() {
  //   return `${this.#startTag} ${this.#attr.join(" ")} style="${this.#styles.join(';')}" ${this.#endTag}`
  // }
}



// var div = new HtmlElement("div")
// div.setAttr(`id="wrapper"`)
// div.setStyle("display: flex")
// var div1 = new HtmlElement("div")
// div1.setStyle("width:300px")
// div1.setStyle("margin:10px")
// var h3 = new HtmlElement("h3")
// h3.setInnerText("What is Lorem Ipsum?")
// div1.setInnerTags(h3)
// var img = new HtmlElement("img")
// img.setAttr(`src="lipsum.jpg"`)
// img.setAttr(`alt="Lorem Ipsum"`)
// img.setStyle("width: 100%")
// div1.setInnerTags(img)

// var p = new HtmlElement("p")
// p.setStyle("text-align: justify;")
// p.setInnerText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
// div1.setInnerTags(p);
// var a = new HtmlElement("a")
// a.setAttr(`href="https://www.lipsum.com/"`)
// a.setAttr(`target="_blank"`)
// a.setInnerText("More...")
// div1.setInnerTags(a)
// div.setInnerTags(div1)
// div.setInnerTags(div1)
// document.write(div.getHtml())



class CssClass {
  #cssStyle = []
  #name = "."
  constructor(name) {
    this.#name += name
  }

  setStyle(val) {
    this.#cssStyle.push(val)
  }
  removeLastStyle() {
    this.#cssStyle.pop()
  }
  getCss() {
    return this.#name + `{ ${this.#cssStyle.join("; ")} }`
  }
}

class HtmlBlock {
  #styleCollection = []
  #rootElement = ""
  constructor() {
  }
  addCssStyleClass(val) {
    if (val instanceof CssClass) {
      this.#styleCollection.push(val.getCss())
    } else console.error("addCssStyleClass(val) : An attempt to add something else!")
  }
  setRootElement(val) {
    if (val instanceof HtmlElement) {
      this.#rootElement = val.getHtml()
    } else console.error("setRootElement(val) : An attempt to add something else!")
  }

  getCode() {
    return `<style>${this.#styleCollection.join("\n")}</style> ${this.#rootElement}`
  }
}

wrap = new CssClass("wrap")
wrap.setStyle("display: flex")

block = new CssClass("block")
block.setStyle("width:300px")
block.setStyle("margin:10px")

img = new CssClass("img")
img.setStyle("width: 100%")

text = new CssClass("text")
text.setStyle("text-align: justify;")


var div = new HtmlElement("div")
div.setAttr(`id="wrapper"`)
div.setAttr(`class="wrap"`)
var div1 = new HtmlElement("div")
div.setAttr(`class="block"`)
var h3 = new HtmlElement("h3")
h3.setInnerText("What is Lorem Ipsum?")
div1.setInnerTags(h3)
var img = new HtmlElement("img")
img.setAttr(`src="lipsum.jpg"`)
img.setAttr(`alt="Lorem Ipsum"`)
img.setAttr(`class="img"`)
div1.setInnerTags(img)

var p = new HtmlElement("p")
p.setAttr(`class="text"`)
p.setInnerText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
div1.setInnerTags(p);
var a = new HtmlElement("a")
a.setAttr(`href="https://www.lipsum.com/"`)
a.setAttr(`target="_blank"`)
a.setInnerText("More...")
div1.setInnerTags(a)
div.setInnerTags(div1)
div.setInnerTags(div1)

var htmlBlock = new HtmlBlock()
htmlBlock.addCssStyleClass(wrap)
htmlBlock.addCssStyleClass(block)
htmlBlock.addCssStyleClass(img)
htmlBlock.addCssStyleClass(text)
htmlBlock.setRootElement(div)
document.write(htmlBlock.getCode())