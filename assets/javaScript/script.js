var orderInformation = {
	'order_status': 'is in transit',
	'arriving_month': 'July',
	'arriving_day': 'Monday',
	'arriving_date': '05',
	'shiped_from': 'Shipped From Mumbai'
};

function loadOrderInformation(orderData) {
	let orderStatus = document.getElementById('order_status');
	let arrivingMonth = document.getElementById('arriving_month');
	let arrivingDay = document.getElementById('arriving_day');
	let arrivingDate = document.getElementById('arriving_date');
	let shipedFrom = document.getElementById('shiped_from');

	let orderStatusText = 'Your order '+ orderData.order_status; 
	let arrivingMonthText = 'Arriving on '+ orderData.arriving_month; 
	let arrivingDayText = orderData.arriving_day; 
	let arrivingDateText = orderData.arriving_date; 
	let shipedFromText = orderData.shiped_from; 

	orderStatus.innerHTML = orderStatusText;
	arrivingMonth.innerHTML = arrivingMonthText;
	arrivingDay.innerHTML = arrivingDayText;
	arrivingDate.innerHTML = arrivingDateText;
	shipedFrom.innerHTML = shipedFromText;
}
loadOrderInformation(orderInformation);

var orderDetails = {
	'order_image_name': 'order_image.png',
	'order_name': 'Pepe jeeans',
	'order_discription': 'Men Blue Skinny Fit Mid-Rise Clean...',
	'order_size_and_qty': '30/1',
	'order_price': '5,845'
};

function loadOrderDetails(orderData) {
	let orderImageHolder = document.getElementById('order_image_holder');
	let imageTag = orderImageHolder.children[0];
	let productName = document.getElementById('product_name');
	let productDiscription = document.getElementById('product_discription');
	let productSize = document.getElementById('product_size');
	let productPrice = document.getElementById('product_price');

	let orderImageName = orderData.order_image_name;
	let orderName = orderData.order_name;
	let orderDiscription = orderData.order_discription;
	let orderSize = 'Size: ' + orderData.order_size_and_qty.split('/')[0];
	let orderqty = 'Qty: ' + orderData.order_size_and_qty.split('/')[1];
	let orderPrice = 'Rs ' + orderData.order_price;

	imageTag.setAttribute('src', 'assets/images/'+orderImageName);
	productName.innerHTML = orderName;
	productDiscription.innerHTML = orderDiscription;
	productSize.innerHTML = orderSize + '/' + orderqty;
	productPrice.innerHTML = orderPrice;
}
loadOrderDetails(orderDetails);


var productSugestion = [
	{
		'product_name': 'Pepe jeeans',
		'product_discription': 'Solid Slim Fit Polo T-shirt',
		'product_price': '5,845',
		'product_image': 'sugestion_one.png',
	},
	{
		'product_name': 'Pepe jeeans',
		'product_discription': 'Solid Slim Fit Polo T-shirt',
		'product_price': '5,845',
		'product_image': 'sugestion_two.png'
	}
];

function loadProductSuggestion(productData) {
	var sugestion_card_holder = document.getElementById('sugestion_card_holder');
	sugestion_card_holder.innerHTML = '';
	for(let i = 0; i <= productData.length-1; i++)
	{
		let productName = productData[i].product_name;	
		let productDiscription = productData[i].product_discription;	
		let productPrice = productData[i].product_price;	
		let productImage = productData[i].product_image;	
		
		var productCard = '<div class="suggestion_post_card"><div class="suggestion_post_image"><img src="assets/images/'+productImage+'" alt=""></div><div class="suggestion_post_discription"><div class="order_name">'+productName+'</div><div class="order_discription sugestion_product_discription">'+productDiscription+'</div><div class="order_prize sugestion_product_price">Rs '+productPrice+'</div></div></div>';
		sugestion_card_holder.innerHTML += productCard;
	}
}
loadProductSuggestion(productSugestion);


$('#shipment_details_tab').click(function(){
	$('#take_action_tab').css('background','white');
	$('#take_action_tab').css('color','#3E57D1');
	$(this).css('background','#3E57D1');
	$(this).css('color','white');
});

$('#take_action_tab').click(function(){
	$('#shipment_details_tab').css('background','white');
	$('#shipment_details_tab').css('color','#3E57D1');
	$(this).css('background','#3E57D1');
	$(this).css('color','white');
});

$(".accordian_tab").click(function(){
	$(this).next().toggle();
	if($(this).next().css('display') == 'none')
	{
		$(this).next().css('margin-bottom','0%');
	  	$(this).css('margin-bottom','4%');
	}
	else
	{
		$(this).next().css('margin-bottom','4%');
		$(this).css('margin-bottom','0%');
	}
});