const filter = (jobs, tags) => {
  const n = jobs.length;
  const m = tags.length;
  const mp = new Map();
  for (let i = 0; i < m; i++) {
    mp.set(tags[i], 1);
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    let temp = jobs[i].skills;
    for (let j = 0; j < temp.length; j++) {
      if (mp.has(temp[j])) {
        ans.push(jobs[i]);
        break;
      }
    }
  }
  return ans;
};
export default filter;
