var sports = ["Cricket", "Football", "Rugby", "Baseball"];
// for(let i = 0; i < sports.length; i++){
//     console.log(sports[i]);
// }
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempsport = sports_1[_i];
    if (tempsport == 'Cricket') {
        console.log("".concat(tempsport, " is my favourite"));
    }
    else {
        console.log(tempsport);
    }
}
