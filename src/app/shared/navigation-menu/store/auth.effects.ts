import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as AuthActions from '../store/auth.action';

@Injectable()
export class AuthEffects {}