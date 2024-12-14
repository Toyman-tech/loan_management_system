import { MouseEventHandler } from "react";

type Props={
    title:string;
    leftIcon?: string | null;
    rightIcon?: string | null;
    handleClick?: MouseEventHandler;
    submitting?: boolean;
    type?: 'button' | 'submit';
    bgColor?: string;
    textColor?: string;
    margin?:string;
    hover?:boolean;
    hidden?: boolean;
    pading?:string;
    marginTop?:string;
    classNa?: string;
    marginB?: string;
}


const Button = ({title, leftIcon, rightIcon, handleClick, submitting, margin, type, bgColor, textColor, hover, hidden, pading, marginTop, classNa, marginB}: Props) => {
  return (
    <button 
      type={type || 'button'}
      disabled={submitting}
      className={`flex  gap-3 ${pading||'p-[10px]' }  ${hover? 'hover:text-black' : 'hover:valid:'} ${textColor || 'text-light-white-300'} ${marginTop || 'mt-5' }
      ${submitting? 'bg-[#8be418] ' : bgColor} ${margin || 'mr-0'}  rounded-xl text-[20px] font-medium  border-solid border-[1px] border-[#0c0f0f13] ${hidden? 'hidden' : ''} ${classNa || ''} ${marginB || ''}`}
      onClick={handleClick}
    >
       {`${title}`}
    </button>
  )
}

export default Button