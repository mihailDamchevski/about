interface LayoutChildren {
  children: any;
}
export const Layout = ({ children }: LayoutChildren) => (
  <div className="professional-content-section">
    {children}
  </div>
);
