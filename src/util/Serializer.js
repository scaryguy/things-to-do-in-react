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
    const filtered = data.filter(elm => elm.group === title);
    return filtered.map(task => {
      task.status = "OPEN";
      if (!this.checkCompletable(task)) {
        task.status = "LOCKED";
      } else if (task.completedAt !== null) {
        task.status = "COMPLETED";
      }
      return task;
    });
  },

  updateTask(data, id, completed = true) {
    data = Utilities.cloneData(data);

    const task = data.filter(elm => elm.id === id)[0];
    task.completedAt = completed ? new Date().getTime() : null;

    for (let i = 0; i < data.length; i++) {
      if (data[i].dependencyIds.indexOf(task.id) > -1) {
        let index = data[i].dependencyIds.indexOf(task.id);

        data[i].dependencyIds.splice(index, 1);
      }
    }

    return data.map(elm => (elm.id === id ? task : elm));
  },

  checkCompletable(task) {
    // data = Utilities.cloneData(data);
    // console.log(data);
    return task.dependencyIds.length > 0 ? false : true;
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].dependencyIds.includes(task.id)) {
    //     return false;
    //   }
    // }
    // return true;
  }
};

export default Serializer;
