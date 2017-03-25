

	function Phone (color, brand, price, number, smsStatus) {
		this.color = color;
		this.brand = brand;
		this.price = price;
		this.number = number;
		this.smsStatus = smsStatus;
	}
		Phone.prototype.printInfo = function() {
			console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", a cena to " + this.price + ".");
	}



		Phone.prototype.sms = function (number) { 
    	 
    		if (this.smsStatus = confirm("Wybrano numer " + number + " Wysłać sms-a?")) {
    	    	this.smsText = prompt("Podaj tresc wiadomosci");
    			return this;
    			}
    			else {
   			return false };
};

		var iPhone6S = new Phone("silver", "Apple", 2240, 7876580);
		var GalaxyS6 = new Phone("blue", "Samsung", 1600, 555333666);
		var OnePlOne = new Phone ("black", "OneAndOne", 1000, 696659565);
		var phone = iPhone6S;
		var smsConnection = phone.sms(phone.number);
		

		GalaxyS6.printInfo();
		

		console.log("Wysłanie sms-a o treści " + smsConnection.smsText + " pod numer " + phone.number + (smsConnection.smsStatus ? " zostało wykonane." : " niewykonane."));

	
	