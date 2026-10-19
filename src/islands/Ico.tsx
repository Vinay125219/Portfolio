import { iconPaths } from '../data/icons';

interface IcoProps {
  name: string;
  className?: string;
}

/** React version of the shared stroke-icon component. */
export default function Ico({ name, className = 'h-5 w-5' }: IcoProps) {
  const inner = iconPaths[name] ?? iconPaths.cube;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
