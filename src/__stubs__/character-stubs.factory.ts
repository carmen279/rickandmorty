function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getCharacterStubs(amount = 2) {
  return Array.from({ length: amount }, () => createCharacterStub(amount));
}

export function createCharacterStub(amount: number) {
  const statusEnum = ["Alive", "Dead", "unknown"];
  const genderEnum = ["Male", "Female", "unknown"];
  return {
    name: `Name ${randomIntFromInterval(1, amount * 100)}`,
    status: statusEnum[randomIntFromInterval(0, 2)],
    gender: genderEnum[randomIntFromInterval(0, 2)],
    id: randomIntFromInterval(1, amount * 100),
    species: `Species ${randomIntFromInterval(1, amount * 100)}`,
    origin: { name: `Origin ${randomIntFromInterval(1, amount * 100)}` },
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  };
}
