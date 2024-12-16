export interface ITodo {
  id: string;
  text: string;
  status: boolean;
}

export type IFilter = "all" | "completed" | "uncompleted";
