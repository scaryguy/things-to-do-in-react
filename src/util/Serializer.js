import Data from "../constants/Data";
import Utilities from "./Utilities";

const Serializer = {
  get tasks() {
    return "Tasks";
  },

  get taskGroups() {
    const map = {};

    Data.forEach(elm => {
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
      for (let [, { group, completedAt }] of Data.entries()) {
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
  getTasks(groupTitle) {
    return Data.filter(elm => elm.group == groupTitle);
  }
};

export default Serializer;
