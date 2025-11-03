interface CenterChildren {
  children: any;
}
export const Center = ({ children }: CenterChildren) => <div className="mx-25 bg-linear-to-b from-red-900 to-rose-950">{children}</div>;
