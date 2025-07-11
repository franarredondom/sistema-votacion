export interface Votacion {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  estado: 'Activa' | 'Finalizada';
}

const STORAGE_KEY = 'votaciones';

export const getVotaciones = (): Votacion[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveVotaciones = (votaciones: Votacion[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votaciones));
};
