var roulete_numbers = {
    0: 'neutral',
    1: 'red',
    2: 'black',
    3: 'red',
    4: 'black',
    5: 'red',
    6: 'black',
    7: 'red',
    8: 'black',
    9: 'red',
    10: 'black',
    11: 'black',
    12: 'red',
    13: 'black',
    14: 'red',
    15: 'black',
    16: 'red',
    17: 'black',
    18: 'red',
    19: 'black',
    20: 'black',
    21: 'red',
    22: 'black',
    23: 'red',
    24: 'black',
    25: 'red',
    26: 'black',
    27: 'red',
    28: 'red',
    29: 'black',
    30: 'red',
    31: 'black',
    32: 'red',
    33: 'black',
    34: 'red',
    35: 'black',
    36: 'red'
}
 async function main(){
await player(100000,500000);
 }

 main();

async function player(start_money,need_win){
    var start_bet = 100;
    var next_bet = start_bet;
    var result = {};
    var bet_color = 'red';
    var money = start_money;
    var i = 0;
    var wins = 0;
    var loses = 0;
    while (money > 2 && money<need_win ){
        result = await roll(next_bet, bet_color);
        money -= next_bet;
        if (result.status === 'win'){
            next_bet = start_bet;
            wins++;
        } else {
            next_bet *= 2;
            loses++;
        }
        money += result.win_money;
        i++;
        console.log(`iteration ${i}`);
        console.log(`money ${money}`);
    }
    console.log(`player stats:`);
    console.log(`start moneys: ${start_money}`);
    console.log(`money ${money}`);
    console.log(`iterations ${i}`);
    console.log(`wins ${wins}`);
    console.log(`loses ${loses}`);
}

async function roll (bet_money, bet_color){
    var result = {};
    var number = Math.trunc(Math.random()*36);

    var roll_color = roulete_numbers[number];

    if (bet_color === roll_color){
        result.win_money = bet_money * 2;
        result.status = 'win';
    } else {
        result.win_money = 0;
        result.status = 'lose';
    }
    return result;
}
