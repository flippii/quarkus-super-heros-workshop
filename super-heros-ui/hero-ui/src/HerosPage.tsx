import * as React from 'react';

export interface HerosPageProps {
  data: Array<{
    id: number;
    userId: number;
    title: string;
    body: string;
  }>;
}

export const HerosPage: React.FC<HerosPageProps> = ({ data }) => (
  <div>
    <h1>Heros</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  </div>
);
