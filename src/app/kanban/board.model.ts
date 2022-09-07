export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  tasks?: Task[];
}

export interface Task {
  description: string;
  lable?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}
