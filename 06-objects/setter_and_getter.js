console.log("--------------------------------------------------")
console.log("Setter and Getter :");


class Rectangle {

    constructor(width, height) {

        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.log("Width should be +ve");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.log("Height should be +ve");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
    get area() {
        return this.height * this.width;
    }
}

let rectangle = new Rectangle(2, 3);

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);