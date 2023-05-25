interface SizePictures {
  height: number,
  width: number,
}

interface Border extends SizePictures {
  type: string
}

interface Shadow extends SizePictures {
  spread: string
}

const profilePicture: Border = {
  height: 100,
  width: 200,
  type: "Dashed"
}

const backgroundImage: Shadow = {
  height: 200,
  width: 300,
  spread: "Bold"
}

console.log(backgroundImage);
console.log(profilePicture);