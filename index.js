function superbowlWin(records) {[
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

  // Use the find() method to search for a win
  const winRecord = records.find(record => record.result === "W");

  // If a winRecord is found, return the year
  if (winRecord) {
    return winRecord.year;
  } else {
    // If no winRecord is found, return undefined
    return undefined;
  }
}





