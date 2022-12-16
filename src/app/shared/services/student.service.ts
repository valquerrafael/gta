import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Role } from "../Util";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class StudentService extends UserService {
    constructor(httpClient: HttpClient) {
        super(httpClient, Role.STUDENT);
    }
}