import { FlatfileListener } from "@flatfile/listener";
import api from "@flatfile/api";
import { blueprint } from './blueprint/blueprint'
import { blueprintVendors } from './blueprint/blueprint_vendors'
import { blueprintOpenAR } from './blueprint/blueprint_open_ar'
import { blueprintOpenAP } from './blueprint/blueprint_open_ap'
import { createPage } from './workflow/welcome-page'
import { xlsxExtractorPlugin } from "@flatfile/plugin-xlsx-extractor";
import { metadata } from "./partials/metadata";
// import { recordHook } from '@flatfile/plugin-record-hook'


// import { configSheetHooks } from "./sheets/configureSheet";
// import { dataInReviewListener } from "./sheets/dataForReviewSheet";
// import { spaceConfigureJob } from "./src/jobs/space.configure";
// import { inviteCollaboratorsJob } from "./src/jobs/invite.collaborators";

export default function (listener: FlatfileListener) {
    
    listener.filter({ job: 'space:configure' }, (configure) => {
        // Add an event listener for the 'job:created' event with a filter on 'space:configure'
        configure.on('job:ready', async (event) => {
            // Destructure the 'context' object from the event object to get the necessary IDs
            const { spaceId, environmentId, jobId } = event.context
            const space = await api.spaces.get(spaceId)
            
      
            await api.jobs.ack(jobId, { info: "Configuring space...", progress: 10 });
      
            // ADD CUSTOM MARKDOWN PAGE TO SPACE
            const page = await createPage(spaceId)

            const { data: workbook } = await api.workbooks.create({
              spaceId,
              environmentId,
              name: "Customers",
              labels: ["primary"],
              sheets: blueprint,
            });

            
      
            await api.spaces.update(spaceId, {
              environmentId,
              metadata,
              primaryWorkbookId: workbook.id,
            });

            const workbookVendors = await api.workbooks.create({
                spaceId,
                environmentId,
                name: "Vendors",
                sheets: blueprintVendors,
              });

            const workbookOpenAP = await api.workbooks.create({
              spaceId,
              environmentId,
              name: "Open AP",
              sheets: blueprintOpenAP,
            });
            
            const workbookOpenAR = await api.workbooks.create({
              spaceId,
              environmentId,
              name: "Open AR",
              sheets: blueprintOpenAR,
            });

            
            await api.jobs.complete(jobId, {});
          }) 
      });
      

//   /**
//    * implement direct job handlers
//    */
//   listener.use(spaceConfigureJob);
//   listener.use(inviteCollaboratorsJob);

//   /**
//    * Config Sheet Hooks
//    */
//   listener.use(configSheetHooks);
  
//   /**
//    *   This adds XLSX Parsing to the Space
//    */
//   listener.use(xlsxExtractorPlugin({ rawNumbers: true }));
}
