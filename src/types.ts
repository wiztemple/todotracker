export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}