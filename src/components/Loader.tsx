import React, { FC } from 'react';


export interface LoaderProps {
  loading?: boolean;
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="flex justify-center items-center h-fit" data-testid="loader">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
    </div>
  );
};

export default Loader;