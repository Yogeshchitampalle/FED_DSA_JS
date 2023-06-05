function towerOfHonoi(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`Move Disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHonoi(n-1, fromRod,usingRod,toRod)
    console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHonoi(n-1, usingRod, toRod, fromRod)
}
towerOfHonoi(1,'A','C','B') //Move Disk 1 from A to C

towerOfHonoi(2,'A','C','B') 
//Move Disk 1 from A to C
//Move Disk 1 from A to B
//Move Disk 2 from A to C
//Move Disk 1 from B to C


towerOfHonoi(3,'A','C','B')
//Move Disk 1 from A to C
// Move Disk 1 from A to B
// Move Disk 2 from A to C
// Move Disk 1 from B to C
// Move Disk 1 from A to C
// Move Disk 2 from A to B
// Move Disk 1 from C to B
// Move Disk 3 from A to C
// Move Disk 1 from B to A
// Move Disk 2 from B to C
// Move Disk 1 from A to C

