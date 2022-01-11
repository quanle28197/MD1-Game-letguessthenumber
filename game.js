function play() {
    let min, max, x, y, i;
    min = parseInt(prompt("Enter range's min"));
    max = parseInt(prompt("Enter range's max"));

    i = 1;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
     do {
         x = parseInt(prompt("Less guess a number in range between" + min + "and" + max + "(Round" + i + ")"));
         if (x === y) {
             alert(" you win ");
             break;
         } else if (x > y)
             alert("your choice is bigger");
         else
             alert("your choice is smaller");
         i++;
     } while ( i <= 3 );

    if ( x !== y )
        alert(" you lose ");


}