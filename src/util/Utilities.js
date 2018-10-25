const Utilities = {
  // Simple parameterizer
  parameterize(groupTitle) {
    if (!groupTitle || typeof groupTitle !== "string")
      return new Error("Please provide the group title as parameter");
    return groupTitle.replace(/(W|\s)/g, "-").toLowerCase();
  }
};

export default Utilities;
