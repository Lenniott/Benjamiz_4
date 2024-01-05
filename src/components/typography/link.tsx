import { Link as RouterLink } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string; // Renamed prop to 'to' to align with React Router's convention
}

export function Link({ to, children }: Props) {
  return (
    <RouterLink to={to} className="text-accent  font-san-serif  text-sm lg:text-base underline underline-offset-1 hover:underline-offset-4">
      {children}
    </RouterLink>
  );
}
