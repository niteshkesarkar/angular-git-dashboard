import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Repository } from './interfaces/repository.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ORG_NAME = environment.githubOrgName;
const PAGE_SIZE = environment.pageSize;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private api: ApiService
  ) {
  }

}
