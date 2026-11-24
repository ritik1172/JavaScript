try{
    let age = 15;
    if(age<18){
        throw new Error("Minor candidate...");
    }
    console.log("You can vote!");
}
catch(error){
    console.log(error.message);
}