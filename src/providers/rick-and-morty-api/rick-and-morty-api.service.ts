import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ICharacters } from './dtos/character.dto';

const BASE_URL = 'https://rickandmortyapi.com';

@Injectable()
export class RickAndMortyApiService {
  constructor(private readonly httpService: HttpService) {}

  async getCharacters(): Promise<ICharacters> {
    const { data } = await firstValueFrom(
      this.httpService.get<ICharacters>(`${BASE_URL}/api/character`).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
