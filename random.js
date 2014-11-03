$(function(){

  $("input").on("keyup", function(e){
    if (e.keyCode === 13) {
      var $this = $(this);
      var newItem = $this.val();
      if (newItem !== "") {
        $("ul").append($("<li>").text(newItem));
        $this.val("");
      }
    }
  });
    var cars = [
        'Mercedes-Benz SL65 AMG Black Series','Audi A8 L W12',
        'Mercedes-Benz S65 AMG', 'Chevrolet Corvette ZR1',
        'Mercedes-Benz CL65 AMG	' ,'Porsche Cayenne Turbo S',
        'Audi R8', 'BMW M6 Convertible','89 Honda Accord',
        'Porsche 911 Convertible', 'Mercedes-Benz CLS63 AMG',
        'AMC Pacer', 'Ford Pinto', 'Oldsmobile Tornado',
        'GOE Storm', 'Pontiac Aztec','Bugatti'
    ];

    var winners = [
       'The Original Ryan', 'The Other Ryan', 'Todd',
        'A.J. Funk', 'SanDeep', 'Aziz', 'Samer', 'Richard',
        'Charles', 'Ben', 'Nick', 'Charlie', 'David Trinn',
        'Phillip', 'Bobby',
    ];

  $("button#getrandom").on("click", function(){
    var randomIndexCar = Math.floor(Math.random() * cars.length);
    var randomCar = cars[randomIndexCar];
    var randomIndexWinner = Math.floor(Math.random() * winners.length);
    var randomWinner = winners[randomIndexWinner];
    $("div#selected-random").text('Winner is ' + randomWinner + ', and he won a new ' + randomCar + '!!!!!')
      log('Winner is ' + randomWinner + ', and he won a new ' + randomCar + '!!!!!')


  });
});
