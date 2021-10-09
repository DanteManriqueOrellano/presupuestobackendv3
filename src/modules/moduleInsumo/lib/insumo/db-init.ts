import "reflect-metadata";
import { Collection, getRepository } from "fireorm";

//import { Collection } from "fireorm";
//import * as fireorm from 'fireorm';
import { Insumo } from ".";


@Collection()
export class Todo {
  id: string;
  text: string;
  done: Boolean;
}

export const dbInit = async function (
  this: Insumo,
  collection = "joder"
  
): Promise<void> {
  const todoRepository = getRepository(Todo);
  const todo = new Todo();
  todo.text = "Check fireorm's Github Repository";
  todo.done = false;
  const todoDocument = await todoRepository.create(todo); // Create todo
  const mySuperTodoDocument = await todoRepository.findById(todoDocument.id); // Read todo
  console.log(mySuperTodoDocument)

};
