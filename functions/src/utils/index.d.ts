interface FoodConsumedRequest {
    foodNames: string[];
  }

interface CustomSession extends Session {
    email?: string;
}

interface InputFood {
    foodName: string;
  }
  
interface MultipleFoodInput {
  foodNames: string[];
}

interface FoodListEntry {
  foodName: string;
  calories: number;
}

interface RecordType {
  id: number;
}

interface EntryType {
  foodName: string;
  calories: number;
}

type FoodInput = InputFood | MultipleFoodInput;

interface LoginInput {
  username: string;
  password: string;
}

interface RegisterInput {
  username: string;
  email: string;
  password: string;
  verificationToken: string;
}
interface UpdateInput {
  nickname: string;
  weight: string;
  height: string;
  gender: string;
  age: number;
  activeness: string;
  category: string;
}