function solution(cacheSize, cities) {
    var answer = 0;
    cities = cities.map(c => c.toUpperCase());
    var array = [];
    for (var i = 0; i < cities.length; i++) {
        var idx = array.idxOf(cities[i]);
        if (idx < 0) {
            array.push(cities[i]);
            if (array.length > cacheSize) array.shift();
            answer += 5;
        }
        else {
            array.splice(idx, 1);
            array.push(cities[i]);
            answer++;
        }
    }
    return answer;
}