export const ConditionallyRender: React.FC<{
  condition: boolean;
  fallback?: React.ReactNode | null;
  children: React.ReactNode;
}> = ({ condition, fallback = null, children }) =>
  condition ? <>{children}</> : <>{fallback}</>;
