import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Repository } from './interfaces/repository.interface';
import { Observable } from 'rxjs';

const ORG_NAME = environment.githubOrgName;
const PAGE_SIZE = environment.pageSize;

@Injectable()
export class RepositoryService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate GET /todos
  getAllRepositories(pageNumber): Observable<Repository[]> {
    return this.api.get(`/orgs/${ORG_NAME}/repos?page=${pageNumber}&per_page=${PAGE_SIZE}`);
  }

  // Simulate GET /todos/:id
  getRepositoryById(owner: string, repositoryId: string): Observable<Repository>  {
    return this.api.get('/repos/' + owner + '/' + repositoryId);
  }

/*
// Simulate GET /todos
  getAllRepositories(pageNumber, pageSize) {
    pageNumber = pageNumber > 1 ? pageNumber : 1;
    pageSize = pageSize > 10 ? pageSize : 10;

    return this.api.get(`/orgs/${ORG_NAME}/repos?page=${pageNumber}&per_page=${pageSize}`);
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
*/
}
