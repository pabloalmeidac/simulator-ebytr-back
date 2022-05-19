export interface ITask {
  id?: number,
  name: string,
  status: 'pendente' | 'em andamento' | 'pronto'
}