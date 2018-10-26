import Utilities from "./Utilities";

const Serializer = {
  taskGroups(data) {
    const map = {};

    data.forEach(elm => {
      const { completedCount, totalCount } = getCounts(elm.group);

      map[elm.group] = {
        id: Utilities.parameterize(elm.group),
        title: elm.group,
        completed: completedCount,
        total: totalCount
      };
    });

    function getCounts(givenGroup) {
      let completedCount = 0;
      let totalCount = 0;
      for (let [, { group, completedAt }] of data.entries()) {
        if (givenGroup === group) {
          totalCount++;
          if (completedAt !== null) {
            completedCount++;
          }
        }
      }
      return { completedCount, totalCount };
    }

    // console.log(map);
    return map;
  },
  getTasks(data, group) {
    const title = typeof group === "object" ? group.title : group;
    data = Utilities.cloneData(data);
    return data.filter(elm => elm.group === title);
  },
  updateTask(data, id, completed = true) {
    data = Utilities.cloneData(data);

    const task = data.filter(elm => elm.id === id)[0];
    task.completedAt = completed ? new Date().getTime() : null;

    return data.map(elm => (elm.id === id ? task : elm));
  }
};

export default Serializer;
