type CustomDivType = {
  children: any;
  kafeSholji: number;
  naKlik: () => void;
};

const CustomDiv = ({ children, kafeSholji, naKlik }: CustomDivType) => {
    return <div>{children} {kafeSholji} <button onClick={naKlik}>abc</button></div>
};

export default CustomDiv;