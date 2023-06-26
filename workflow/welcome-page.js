import api from "@flatfile/api";

export function createPage(spaceId) {
    return api.documents.create(spaceId, {
        title: 'Getting Started',
        body:
          '# Welcome\n' +
          '### We\'re so excited to welcome you to Macrofin!\n' +
          "We've set up this data space to support your migration to Netsuite.\n" +
          "Please reach out to your implementation team if you have any questions.\n" +
          "Otherwise, you can get started by uploading an Excel or CSV file by navigating to Files -> Upload file.\n" +
          '---\n',
      })
}