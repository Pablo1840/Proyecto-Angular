import { SolicitudModel } from "./solicitud.model";

export interface PostulanteModel{
    codPostulante?: number;
    certificadobanca?: string;
    curriculo?: string;
    nombres?: string;
    titulo?: string;
    ci?:string;
    solicitud: SolicitudModel;
}