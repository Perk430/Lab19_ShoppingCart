function AddToCart (items)
	{
		var ItemPrices = ["1.99", "2.59", "7.99", "3.49"];
		var ItemArray = ["Milk", "Sugar", "Coffee","Water"];
	}
	//Assigning values to my variables, which are my items.
	var Milk = 1.99;
	var Sugar = 2.59;
	var Coffee = 7.99;
	var Water = 3.49;
	
	//Assignment of variables by this formula: var x = document.getElementById("x").value;
	var Milk = document.getElementById("Milk")."1.99";
	var Sugar = document.getElementById("Sugar")."2.59";
	var Coffee = document.getElementById("Coffee")."7.99";
	var  Water = document.getElementById("Water")."3.49";
	
	//Method to create new items in the array "cart"
	var cart = [];
	var Item = function (name, price, count)
	{
		this.name = name
		this.price = price
		this.count = count
	};
	
	//Adding items to cart and checking for items of the same name and increasing that count.
	//If the new item is not already in the list or array, then it is added by the "push" statement.
	function addItemToCart(name, price, count)
	{for (var i in cart){
		if (cart [i].name === name) {
			cart [i].count += count;
			return;
		}
	  }
	  var item = new Item(name, price, count);
	  cart.push(item);
	}
		