
export const GKYplanetPicker = (cityTemp, cityHumidity) => {
  const desertThresh = 45;
  let newPlanet = [];

  if (cityTemp >= 100) {
    newPlanet = [
      "Mustafar",
      "https://static.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png",
      " Stay hydrated!! Its really hot out there.",
    ];
    return newPlanet;
  } else if (cityTemp < 100 && cityTemp >= 80) {
    if (cityHumidity < desertThresh) {
      newPlanet = [
        "Tatooine",
        "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png",
        " Wear some sunscreen.",
      ];
    } else {
      newPlanet = [
        "Scarif",
        "https://static.wikia.nocookie.net/starwars/images/6/6d/Scarif_SWCT.png",
        " Enjoying the warm humidity?",
      ];
    }
    return newPlanet;
  } else if (cityTemp < 80 && cityTemp >= 72) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Yavin IV",
        "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png",
        " Should be nice out... Enjoy!",
      ];
    } else {
      newPlanet = [
        "Jakku",
        "https://static.wikia.nocookie.net/starwars/images/f/ff/Jakku-PoeDameronFlightLog.png",
        " Enjoy the desert esq weather.",
      ];
    }
    return newPlanet;
  } else if (cityTemp < 72 && cityTemp >= 62) {
    newPlanet = [
      "Alderaan",
      "https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg",
      " May get explodey... Enjoy the the weather while it last.",
    ];
    return newPlanet;
  } else if (cityTemp < 62 && cityTemp >= 52) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Dagobah",
        "https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg",
        " Great day for exploring.",
      ];
    } else {
      newPlanet = [
        "Dathomir",
        "https://static.wikia.nocookie.net/starwars/images/f/f3/Dathomir-Massacre.png",
        " You should probaly wear a jacket.",
      ];
    }
    return newPlanet;
  } else if (cityTemp < 52 && cityTemp >= 45) {
    newPlanet = [
      "Kamino",
      "https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg",
      " Wear the jacket..",
    ];
  } else if (cityTemp <= 45) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Hoth",
        "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png",
        " You better bundle up. Happy Life Day!",
      ];
    } else {
      newPlanet = [
        "Jedah",
        "https://static.wikia.nocookie.net/starwars/images/2/2c/Jedha_SWCT.png",
        " You better bundle up.",
      ];
    }
    return newPlanet;
  }
};