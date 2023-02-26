function solution(skill, skill_trees) {
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let str = [...skill_trees[i]]
      .filter((e) => [...skill].includes(e))
      .join("");
    if (skill[0] === str[0] && skill.includes(str)) {
      answer++;
    } else if (str === "") {
      answer++;
    }
  }
  return answer;
}