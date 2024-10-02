import {getEntreprise} from "./entreprise.model";

export interface UserCreateDto{
  nom: string;
  prenom : string;
  email : string;
  pwd: string;
}

export interface getUser {
  id: number;
  nom : string;
  prenom : string;
  email : string;
  role : string;
  entreprise: getEntreprise;
}

export interface UserLoginDto{
  email: string;
  pwd: string;
}

export interface UserJwtTokenDTO{
  expireIn: string;
  accessToken : string;
}


export interface UserJwtSessionDTO{
  id: number;
  email : string;
  role : string;
}

export interface UserUpdateEntrepriseRoleDto {
  role: string;
  entreprise : getEntreprise;
}
