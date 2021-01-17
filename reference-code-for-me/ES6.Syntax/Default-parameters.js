const getAddress = function (city, state, country = "Korea") {
  return `${city}, ${state.toUpperCase()}, ${country}`;
};

getAddress("seoul", "Seoul");
//"seoul, SEOUL, Korea"
