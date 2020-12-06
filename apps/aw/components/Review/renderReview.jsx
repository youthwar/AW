import React, { memo, useMemo } from 'react';
import md from './markdown';

const PreviewWysiwyg = ({ data }) => {
  const html = md.render(data || '');

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PreviewWysiwyg;