const Coins = (int)=>{

    const coin = {
        '500': 0,
        '100':0,
        '25':0,
        '5':0,
        '1':0,
    }

    let rest = int;

    coin['500'] = Math.floor(rest / 500);
    coin['100'] = Math.floor(rest / 100);
    coin['25'] = Math.floor(rest / 25);
    coin['5'] = Math.floor(rest / 5);
    coin['1'] = Math.floor(rest / 1);

    return coin;
}
console.log(Coins(300));
