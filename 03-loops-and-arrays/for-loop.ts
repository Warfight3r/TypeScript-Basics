let sports: string[] = ["Cricket", "Football", "Rugby", "Baseball"];

// for(let i = 0; i < sports.length; i++){
//     console.log(sports[i]);
// }

for(let tempsport of sports){

    if(tempsport == 'Cricket'){
        console.log(`${tempsport} is my favourite`);
    }
    else{
        console.log(tempsport);
    }
}

