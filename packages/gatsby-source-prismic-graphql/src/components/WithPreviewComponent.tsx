import React, { PropsWithChildren } from 'react';
import { WrapPage } from '@prismicio/gatsby-source-prismic-graphql';

export type WithPreviewProps<T> = PropsWithChildren<{
  data: T;
  query: any;
  fragments?: any[];
}>;

/**
 * our own WithPreview helper
 */
export const WithPreviewComponent = <Data,>({
  query,
  fragments = [],
  children,
  data,
}: WithPreviewProps<Data>) => {
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  const rootQuery = `${query.source}${fragments
    .map((fragment: any) => (fragment && fragment.source ? fragment.source : ''))
    .join(' ')}`;

  return (
    <WrapPage
      data={data}
      pageContext={{ rootQuery }}
      options={(window as any).prismicGatsbyOptions || {}}
    >
      {children}
    </WrapPage>
  );
};
