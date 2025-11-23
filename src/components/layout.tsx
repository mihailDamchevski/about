interface LayoutChildren {
  children: any;
}
export const Layout = ({ children }: LayoutChildren) => <div className="mx-25 bg-linear-to-b from-red-900 to-rose-950">{children}</div>;
