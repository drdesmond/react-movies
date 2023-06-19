import React, { FC, MouseEventHandler } from "react";
import Loader from "./Loader";


export interface DataProps {
  _id: string;
  name?: string;
  dialog?: string;
}

export interface ListOptionProps {
  title: string;
  data?: DataProps[];
  loading?: boolean;
  error?: string;
  handleNext: MouseEventHandler<HTMLButtonElement>;
  handlePrev: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  cta: string
}

const Button: FC<ButtonProps> = ({ onClick, cta }) => {
  return (
    <button 
      className="rounded-lg border bg-blue-500 text-white p-3 mt-3 w-full md:max-w-fit hover:bg-blue-400"
      onClick={onClick}>
      {cta}
    </button>)
}

const ListOptions: FC<ListOptionProps> = ({ title, data = [], error = '', loading, handleNext, handlePrev }) => {

  if (loading) {
    return <Loader loading />
  }

  if (error) {
    return (<p className="text-red-500" data-testid="error">
      An error has occurred in the <b>{title}</b> component! You have probably reached the API limit.
    </p>)
  }

  return <div className="my-6">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    {data?.length > 0 ? <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(({ _id, name, dialog }: DataProps) => (
        <li key={_id} className="bg-white rounded-lg overflow-hidden shadow-md p-4">{name || dialog}</li>
      ))}
    </ul> : <p>No Record Found</p>}
    <Button onClick={handlePrev} cta="Previous" />
    <Button onClick={handleNext} cta="Next" />
  </div>
}

export default React.memo(ListOptions);