import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Repository } from './interfaces/repository.interface';
import { Observable } from 'rxjs';

const ORG_NAME = environment.githubOrgName;
const PAGE_SIZE = environment.pageSize;
const pageNumber = 1;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate GET /todos
  getRepos(): Observable<Repository[]> {
    return this.api.get(`/orgs/${ORG_NAME}/repos?page=${pageNumber}&per_page=${PAGE_SIZE}&sort=updated&direction=desc`);
  }
}
