import axios from 'axios';

const BASE_URL = 'http://localhost/projects';

export interface IProject {
  id: number;
  name: string;
}

// API methods
export async function getAllProjects(): Promise<IProject[]> {
  const response = await axios.get<IProject[]>(BASE_URL);
  return response.data;
}

export async function getProject(id: number): Promise<IProject> {
  const response = await axios.get<IProject>(`${BASE_URL}/${id}`);
  return response.data;
}

export async function createProject(
  data: Omit<IProject, 'id'>,
): Promise<IProject> {
  const response = await axios.post<IProject>(BASE_URL, data);
  return response.data;
}

export async function updateProject(
  id: number, 
  data: Partial<IProject>,
): Promise<IProject> {
  const response = await axios.put<IProject>(`${BASE_URL}/${id}`, data);
  return response.data;
}

export async function deleteProject(
  id: number,
): Promise<void> {
  await axios.delete(`${BASE_URL}/${id}`);
}
