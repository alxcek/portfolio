export interface Project {
  id: string;
  title: string;
  description: string | null;
  image: string;
  link: string;
  tags?: string[];
  component?: string;
  locked?: boolean;
}
