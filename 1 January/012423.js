const jumpingOnClouds = (c, k) => {
    let energy = 100
    let position = 0
    console.log(k)
    while (energy > 0){
        console.log("-------new loop ------")
        console.log("energy at beginning of iteration", energy)
        console.log("index position at beginning of iteration", position)
        console.log("position value at beginning of iteration", c[position])
        // console.log("value at index", c[position])
        if ((position == 0) && (energy == 100)){
            position += k
            energy --
            if (c[position] == 1){
                energy -= 2
            }
            if (position >= c.length){
                position -= c.length
                if (c[position] == 1){
                    energy -= 2
                    if (position == 0){
                        break
                    }
                if (position == 0){
                    break
                }
                }
            }
        }
        else {
            if (position == 0){
                break
            }
            energy--
            position += k 
            if (c[position] == 1){
                energy -= 2
            }
            if (position >= c.length){
                position -= c.length
                if (c[position] == 1){
                    energy -= 2
                    if (position == 0){
                        break
                    }
                if (position == 0){
                    break
                }
                }
            }
        }
        console.log("index position at end of iteration", position)
        console.log("position value at end of iteration", c[position])
        console.log("energy at end of iteration", energy)
    }
    return energy
}

console.log(jumpingOnClouds([0,0,1,0],2))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2))
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0],3))
console.log(jumpingOnClouds([1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], 19))






// A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

// There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud .

// Given the values of , , and the configuration of the clouds as an array , determine the final value of  after the game ends.

// Example. 

// The indices of the path are . The energy level reduces by  for each jump to . The character landed on one thunderhead at an additional cost of  energy units. The final energy level is .

// Note: Recall that  refers to the modulo operation. In this case, it serves to make the route circular. If the character is at  and jumps , it will arrive at .

// Function Description

// Complete the jumpingOnClouds function in the editor below.

// jumpingOnClouds has the following parameter(s):

// int c[n]: the cloud types along the path
// int k: the length of one jump
// Returns

// int: the energy level remaining.
// Input Format

// The first line contains two space-separated integers,  and , the number of clouds and the jump distance.
// The second line contains  space-separated integers  where . Each cloud is described as follows:

// If , then cloud  is a cumulus cloud.
// If , then cloud  is a thunderhead.