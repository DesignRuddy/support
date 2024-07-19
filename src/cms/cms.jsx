import CMS from 'decap-cms-app';
import React from 'react';
// import { Widget as IdWidget } from '@ncwidgets/id';

const HelpsPreview = ({ entry, getAsset }) => {
  const image = entry.getIn(['data', 'image']);
  const bg = getAsset(image);

  return (
    <div>
      <h1>{entry.getIn(['data', 'title'])}</h1>
      <img src={bg.toString()} alt="Preview" />
      <div className="text">
        {CMS.widgetFor('body')}
      </div>
    </div>
  );
};

CMS.registerPreviewTemplate("helps", HelpsPreview);

CMS.init({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main', // 기본 브랜치를 설정합니다.
      },
      media_folder: 'static/images/uploads',
      public_folder: '/images/uploads',
      collections: [
        {
          name: 'helps',
          label: 'Helps',
          folder: 'content/azit',
          create: true,
          slug: '{{slug}}',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Draft', name: 'draft', widget: 'boolean' },
            { label: 'Publish Date', name: 'date', widget: 'datetime' },
            { label: 'Cover Image', name: 'image', widget: 'image', required: false },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ],
        },
        // 추가 컬렉션을 여기에 추가합니다.
      ],
    },
  });
  