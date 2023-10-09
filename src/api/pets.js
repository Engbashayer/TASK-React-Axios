import instance from ".";

const GetAllPets = async () => {
  const res = await instance.get(`/pets`);
  return res.data; //will return an array
};

const GetOnePet = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data; //will return one object
};

const CreatNewPet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return res.data;
};

const DeletPet = async (petId) => {
  const res = await instance.delete(`/pets/${petId}`);
  return res.data; //will return one object
};

const UpDatePet = async (petId, name, type, image, adopted) => {
  const res = await instance.put(`/pets/${petId}`, {
    name: name,
    type: type,
    image: image,
    adopted: 1,
  });
  return res.data;
};
export { GetAllPets, GetOnePet, CreatNewPet, DeletPet, UpDatePet };
