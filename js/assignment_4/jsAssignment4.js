// superclass
function car() {
    this.components = ["windows", "doors", "wheels", "brake", "glass"];
}

// subclasses
function SUV(nameSUV, color, purchaseDate) {
    this.nameOfSUV = nameSUV;
    this.color = color;
    this.dateOfPurchase = purchaseDate;
}

function MPV(nameMPV, color, purchaseDate) {
    this.nameOfMPV = nameMPV;
    this.color = color;
    this.dateOfPurchase = purchaseDate;
}

function Hatchback(nameHatchback, color, purchaseDate) {
    this.nameOfHatchback = nameHatchback;
    this.color = color;
    this.dateOfPurchase = purchaseDate;
}

// inheritance
SUV.prototype = new car();
MPV.prototype = new car();
Hatchback.prototype = new car();

// input
var SUV1 = new SUV("Merc GLA", "blue", "19/2/1991");
var SUV2 = new SUV("BMW X3", "red", "19/2/1999");


