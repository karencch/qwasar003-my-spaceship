

const flightPath = "RRALAA";

function my_spaceship(flightPath){

    let shipPosition = {x: 0, y: 0, direction: 'up'};

    for (let i = 0; i<flightPath.length; i++){
        if (flightPath[i]=='R'){
            turnRight();
        } else if (flightPath[i]=='L'){
            turnLeft();
        } else if (flightPath[i]=='A'){
            advance();
        }
    };

    function turnRight(){
        if (shipPosition.direction=='up'){
            shipPosition.direction= 'right';
        } else if (shipPosition.direction=='right'){
            shipPosition.direction= 'down';
        } else if (shipPosition.direction=='down'){
            shipPosition.direction='left';
        } else if (shipPosition.direction=='left'){
            shipPosition.direction = 'up';
        }
    };

    function turnLeft(){
        if (shipPosition.direction=='up'){
            shipPosition.direction= 'left';
        } else if (shipPosition.direction=='right'){
            shipPosition.direction= 'up';
        } else if (shipPosition.direction=='down'){
            shipPosition.direction='right';
        } else if (shipPosition.direction=='left'){
            shipPosition.direction = 'down';
        }
    };

    function advance(){
        if (shipPosition.direction=='up'){
            shipPosition.y -= 1;
        } else if (shipPosition.direction=='right'){
            shipPosition.x += 1;
        } else if (shipPosition.direction=='down'){
            shipPosition.y += 1;
        } else if (shipPosition.direction=='left'){
            shipPosition.x -= 1;
        }
    };

    return `{x: ${shipPosition.x}, y: ${shipPosition.y}, direction: '${shipPosition.direction}'}`;

};

console.log(my_spaceship(flightPath));