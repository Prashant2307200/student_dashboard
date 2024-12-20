import React from 'react';

interface IList<T> {
  data: T[];
  getKey?: (item: T) => React.Key;
  getRow: (item: T) => React.ReactNode;
}

export default function List<T>({ data, getKey, getRow }: IList<T>) {
  return data.map((item: T, index: number) => (
      <React.Fragment key={getKey?.(item) ?? index}>
        {getRow(item)}
      </React.Fragment>
    )
  )
}
