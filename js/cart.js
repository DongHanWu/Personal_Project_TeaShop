// 減數量
var minus = (index) => {

    // 取得當前數量的數值
    var amounts = $('[name=amount]');;
    // 得到第一個amount element的value屬性值
    var count = parseInt(amounts[index].value)
    if (count <= 1) {
        alert('不可以再減!我沒了')
    } else {
        // 得到第一個amount element的value
        var count = parseInt(amounts[index].value) - 1 // 數量-1
        // 將count數值綁定到數量的文本框
        amounts[index].value = count;

        var prices = $('[name=price]');
        var price = parseInt(prices.value);
        // var price = parseInt(prices[index].value);
        var totalmoney = price * count;

        $('#totalPrice').text(`NT$ ${totalmoney}`);
        total();
    }


}
// 加數量
var plus = (index) => {
    // 取得當前數量的數值
    var amounts = $('[name=amount]');
    // 得到第一個amount element的value
    var count = parseInt(amounts[index].value) + 1 // 數量+1
    // 將count數值綁定到數量的文本框
    amounts[index].value = count;
    var prices = $('[name=price]');
    var price = parseInt(prices.value);
    var totalmoney = price * count;
    $('#totalPrice').text(`NT$ ${totalmoney}`);
    total();
}


// 總金額
var total = () => {
    // 得到所有數量
    var counts = $('[name=amount]');
    // 得到所有單價
    var prices = $('[name=price]');;
    var sumMoney = 0;
    for (var i = 0; i < counts.length; i++) {
        sumMoney += parseInt(prices[i].value) * parseInt(counts[i].value)
    }
    // 總金額放到指定元素內
    document.getElementById("totalPrice").innerHTML = "NT$" + sumMoney;
}
total();
// 刪除
var delete1 = () => {
    if (confirm('確定要刪除嗎?')) {
        var del = $('#first');
        del.parentNode.removechild(del)
        alert('刪除成功!');
    }
}
// for cart
    // Get the modal
    var cart = document.getElementById('cart');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == cart) {
            cart.style.display = "none";
        }
    }

