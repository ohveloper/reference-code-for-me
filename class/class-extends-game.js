class Elf {
  constructor(name) {
    this.name = name;
    this.tribe = "elf";
  }
  moveFaster() {
    console.log(`${this.name} move faseter now!`);
  }
  speakWithAnimal() {
    console.log(`${this.name} speak with animal`);
  }
}

class HalfElf extends Elf {
  constructor(name, tendency) {
    super(name);
    this.tendency = tendency.toLowerCase();
  }
  tryToSpeakWithAnimal() {
    if (this.tendency === "good") {
      return super.speakWithAnimal();
    } else {
      return "I can't speak with animal";
    }
  }
}
