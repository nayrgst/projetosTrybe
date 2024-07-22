import { ICar } from "../../../../interfaces/ICar";


export const mockCar: ICar & {_id: string} = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const mockUpdate: ICar & {_id: string} = {
  _id: "4edd40c86762e0fb12000003",
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}
//referencia pega no link a seguir https://stackoverflow.com/questions/62610281/how-to-get-an-error-by-using-deleteone-method-of-mongoose-with-a-key-after-delet
export const mockDelete: any = {
  ...mockCar,
  acknowledged: true,
  deletedCount: 1
}