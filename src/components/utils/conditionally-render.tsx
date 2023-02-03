// @NOTE: This element was created for basic service card, and since it was removed from the project, it is not used anywhere currently, but it can be used in the future.
export const ConditionallyRender: React.FC<{
  condition: boolean;
  fallback?: React.ReactNode | null;
  children: React.ReactNode;
}> = ({ condition, fallback = null, children }) =>
  condition ? <>{children}</> : <>{fallback}</>;
